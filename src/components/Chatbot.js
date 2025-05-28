import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Selamat datang! Masukkan teks berita untuk memulai.' },
  ]);

  const handleSend = async (userInput) => {
    setMessages([...messages, { sender: 'user', text: userInput }]);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userInput }),
      });

      if (!response.ok) {
        throw new Error('Gagal menghubungi server');
      }

      const data = await response.json();
      const botResponse = `Prediksi: ${data.result} (Probabilitas: ${data.probability.toFixed(2)})`;
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Maaf, terjadi kesalahan saat memproses permintaan Anda.' },
      ]);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg h-[600px]">
      <div className="bg-blue-600 text-white p-4 text-center text-lg font-semibold rounded-t-lg">
        Hoax Detection Chatbot
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chatbot;