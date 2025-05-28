from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')
nltk.download('stopwords')

# Inisialisasi Flask
app = Flask(__name__)
CORS(app)

# Load model
model = load_model('model/bilstm_hoax_detection.h5')

# Load tokenizer (buat tokenizer yang sama seperti pelatihan)
from tensorflow.keras.preprocessing.text import Tokenizer
tokenizer = Tokenizer(num_words=5000)

# Preprocessing teks
stop_words = set(stopwords.words('indonesian'))
lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^a-z\s]', '', text)  # Hapus tanda baca dan angka
    tokens = word_tokenize(text)
    tokens = [lemmatizer.lemmatize(word) for word in tokens if word not in stop_words]
    return ' '.join(tokens)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if 'text' not in data:
        return jsonify({'error': 'Teks tidak ditemukan'}), 400

    input_text = data['text']
    processed_text = preprocess_text(input_text)

    # Tokenisasi dan padding
    tokenized_text = tokenizer.texts_to_sequences([processed_text])
    padded_text = pad_sequences(tokenized_text, padding='post', maxlen=200)

    # Prediksi
    prediction = model.predict(padded_text)
    result = "Hoax" if prediction[0][0] > 0.5 else "Valid"
    probability = float(prediction[0][0])

    return jsonify({
        'text': input_text,
        'result': result,
        'probability': probability
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)