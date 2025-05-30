# AI News Checker

AI News Checker is a system designed to detect fake news using a BiLSTM model. The project consists of a frontend built with React and a backend built with Flask. The AI model is trained using a news dataset with text preprocessing techniques such as tokenization, padding, and lemmatization.

## Purpose

The purpose of this project is to provide a tool that can help users automatically identify fake or valid news using AI technology.

## Background

With the increasing amount of fake news circulating on the internet, it is important to have a tool that can help verify the authenticity of news. AI News Checker uses a BiLSTM model trained on a news dataset to detect fake news with high accuracy.

## Project Structure

```
backend/
	dataset/
		cleaned_dataset.csv
	model/
		bilstm_hoax_detection-v2.h5
		bilstm_hoax_detection.h5
		lstm_hoax_detection.h5
	myenv/
		Include/
		Lib/
		Scripts/
		pyvenv.cfg
	app.py
	main.ipynb
	model_ai_authentic_fake_news_checker.ipynb
	requirements.txt
public/
	index.html
	manifest.json
src/
	components/
		Chatbot.js
		ChatInput.js
		ChatMessage.js
		Dashboard.js
		Navbar.js
	pages/
		ChatbotPage.js
		DashboardPage.js
		DocumentationPage.js
	App.js
	index.js
	index.css
.gitignore
LICENSE
package-lock.json
package.json
README.md
tailwind.config.js
```

## Features

- Predict whether news is fake or valid
- Interactive chatbot interface
- Store prediction results

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask
- **AI Model**: TensorFlow, Keras
- **Text Preprocessing**: NLTK

## Installation

### Frontend

1. Navigate to the `app` directory:
    ```sh
    cd app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the application:
    ```sh
    npm start
    ```

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv myenv
    ```

3. Activate the virtual environment:
    - Windows:
        ```sh
        myenv\Scripts\activate
        ```
    - MacOS/Linux:
        ```sh
        source myenv/bin/activate
        ```

4. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the Flask application:
    ```sh
    flask run
    ```

## Usage

### Chatbot

1. Open the frontend application in a browser.
2. Navigate to the Chatbot page.
3. Enter news text to get a prediction on whether the news is fake or valid.

### Dashboard

1. Open the frontend application in a browser.
2. Navigate to the Dashboard page to view information about the model's performance and the dataset.

## AI Model

The AI model uses a BiLSTM architecture trained on a news dataset. The training process involves the following steps:

1. **Text Preprocessing**: Tokenization, padding, and lemmatization.
2. **Building the Model**: Using embedding, BiLSTM, and dense layers.
3. **Compiling the Model**: Using the `binary_crossentropy` loss function and the `adam` optimizer.
4. **Training the Model**: Using callbacks for early stopping and learning rate scheduling.
5. **Evaluating the Model**: Using accuracy and loss metrics.

## Backend

### Language

The backend of this project is built using Python.

### Dependencies

- **Flask**: A micro web framework for building web applications.
- **TensorFlow**: A library for machine learning and deep learning.
- **NLTK**: A library for natural language processing.
- **Pandas**: A library for data manipulation and analysis.
- **NumPy**: A library for numerical computing.

### Libraries and Frameworks Used

- **Flask**: Used to create the backend server that handles requests from the frontend and sends responses.
- **TensorFlow**: Used to load the pre-trained AI model and make predictions.
- **NLTK**: Used for text preprocessing such as tokenization, stopword removal, and lemmatization.
- **Pandas**: Used to read and manipulate the dataset.
- **NumPy**: Used for efficient numerical computations.

### Functions

- **app.py**: The main file that initializes the Flask application, loads the AI model, and defines the prediction endpoint.
- **model_ai_authentic_fake_news_checker.ipynb**: A Jupyter Notebook containing the code for training the AI model.

## Frontend

### Language

The frontend of this project is built using JavaScript with the React framework.

### Dependencies

- **React**: A library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Tailwind CSS**: A CSS framework for styling.

### Libraries and Frameworks Used

- **React**: Used to build the user interface components.
- **React Router**: Used to manage navigation between pages in the application.
- **Tailwind CSS**: Used for quickly and consistently styling components.

### Functions

- **App.js**: The main file that sets up routing and displays the main components.
- **Navbar.js**: A component for displaying navigation at the top of the application.
- **Dashboard.js**: A component for displaying information about the model's performance and the dataset.
- **Chatbot.js**: A component for displaying the chatbot interface that allows users to input news text and get predictions.
- **ChatInput.js**: A component for inputting text in the chatbot.
- **ChatMessage.js**: A component for displaying messages in the chatbot.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## 👨‍💻 Authors
**Developed by:**
**Muhamad Nur Arif**

### 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://arifsuz.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arifsuz)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marif8/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/arif_suz/)
# AI News Checker

AI News Checker is a system designed to detect fake news using a BiLSTM model. The project consists of a frontend built with React and a backend built with Flask. The AI model is trained using a news dataset with text preprocessing techniques such as tokenization, padding, and lemmatization.

## Purpose

The purpose of this project is to provide a tool that can help users automatically identify fake or valid news using AI technology.

## Background

With the increasing amount of fake news circulating on the internet, it is important to have a tool that can help verify the authenticity of news. AI News Checker uses a BiLSTM model trained on a news dataset to detect fake news with high accuracy.

## Project Structure

```
app/
	public/
		index.html
		manifest.json
	src/
		components/
			Chatbot.js
			ChatInput.js
			ChatMessage.js
			Dashboard.js
			Navbar.js
		pages/
			ChatbotPage.js
			DashboardPage.js
			DocumentationPage.js
		App.js
		index.js
		index.css
	.gitignore
	package-lock.json
	package.json
	README.md
	tailwind.config.js
backend/
	dataset/
		cleaned_dataset.csv
	model/
		bilstm_hoax_detection-v2.h5
		bilstm_hoax_detection.h5
		lstm_hoax_detection.h5
	myenv/
		Include/
		Lib/
		Scripts/
		pyvenv.cfg
	app.py
	main.ipynb
	model_ai_authentic_fake_news_checker.ipynb
	requirements.txt
.gitignore
LICENSE
README.md
```

## Features

- Predict whether news is fake or valid
- Interactive chatbot interface
- Store prediction results

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask
- **AI Model**: TensorFlow, Keras
- **Text Preprocessing**: NLTK

## Installation

### Frontend

1. Navigate to the `app` directory:
    ```sh
    cd app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the application:
    ```sh
    npm start
    ```

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv myenv
    ```

3. Activate the virtual environment:
    - Windows:
        ```sh
        myenv\Scripts\activate
        ```
    - MacOS/Linux:
        ```sh
        source myenv/bin/activate
        ```

4. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the Flask application:
    ```sh
    flask run
    ```

## Usage

### Chatbot

1. Open the frontend application in a browser.
2. Navigate to the Chatbot page.
3. Enter news text to get a prediction on whether the news is fake or valid.

### Dashboard

1. Open the frontend application in a browser.
2. Navigate to the Dashboard page to view information about the model's performance and the dataset.

## AI Model

The AI model uses a BiLSTM architecture trained on a news dataset. The training process involves the following steps:

1. **Text Preprocessing**: Tokenization, padding, and lemmatization.
2. **Building the Model**: Using embedding, BiLSTM, and dense layers.
3. **Compiling the Model**: Using the `binary_crossentropy` loss function and the `adam` optimizer.
4. **Training the Model**: Using callbacks for early stopping and learning rate scheduling.
5. **Evaluating the Model**: Using accuracy and loss metrics.

## Backend

### Language

The backend of this project is built using Python.

### Dependencies

- **Flask**: A micro web framework for building web applications.
- **TensorFlow**: A library for machine learning and deep learning.
- **NLTK**: A library for natural language processing.
- **Pandas**: A library for data manipulation and analysis.
- **NumPy**: A library for numerical computing.

### Libraries and Frameworks Used

- **Flask**: Used to create the backend server that handles requests from the frontend and sends responses.
- **TensorFlow**: Used to load the pre-trained AI model and make predictions.
- **NLTK**: Used for text preprocessing such as tokenization, stopword removal, and lemmatization.
- **Pandas**: Used to read and manipulate the dataset.
- **NumPy**: Used for efficient numerical computations.

### Functions

- **app.py**: The main file that initializes the Flask application, loads the AI model, and defines the prediction endpoint.
- **model_ai_authentic_fake_news_checker.ipynb**: A Jupyter Notebook containing the code for training the AI model.

## Frontend

### Language

The frontend of this project is built using JavaScript with the React framework.

### Dependencies

- **React**: A library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Tailwind CSS**: A CSS framework for styling.

### Libraries and Frameworks Used

- **React**: Used to build the user interface components.
- **React Router**: Used to manage navigation between pages in the application.
- **Tailwind CSS**: Used for quickly and consistently styling components.

### Functions

- **App.js**: The main file that sets up routing and displays the main components.
- **Navbar.js**: A component for displaying navigation at the top of the application.
- **Dashboard.js**: A component for displaying information about the model's performance and the dataset.
- **Chatbot.js**: A component for displaying the chatbot interface that allows users to input news text and get predictions.
- **ChatInput.js**: A component for inputting text in the chatbot.
- **ChatMessage.js**: A component for displaying messages in the chatbot.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## 👨‍💻 Authors
**Developed by:**
**Muhamad Nur Arif**

### 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ariftsx.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arifsuz)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marif8/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ariftsx/)
