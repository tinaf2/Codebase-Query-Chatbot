# Codebase-Query-Chatbot

## Overview
**Codebase Query Chatbot** enables developers to interact with their codebase through a chatbot interface, providing answers based on the code's context. Built with **React.js** for the frontend and **FastAPI** for the backend, this project integrates **Pinecone** for fast vector search and utilizes **Retrieval-Augmented Generation (RAG)** powered by a **Large Language Model (LLM)** for enhanced query responses. The system is optimized for embedding individual functions instead of entire files to improve accuracy.

---

## Key Features
- **Interactive Chatbot**: Query your codebase via an intuitive React.js frontend.
- **FastAPI Backend**: Handles user queries and integrates with Pinecone for fast and accurate search.
- **Retrieval-Augmented Generation (RAG)**: Combines context retrieval and **LLM**-powered responses to deliver highly relevant answers.
- **Function-Level Embeddings**: Focus on embedding individual functions rather than entire files for more precise and relevant query results.
- **Scalable and Optimized**: Built to handle large codebases and provide fast responses.

---

## Technologies Used
- **Frontend**: React.js, JavaScript, Axios, React Router
- **Backend**: FastAPI, Uvicorn, Pinecone, Langchain, Pydantic, Groq, Sentence-Transformers
- **Development Tools**: Git, Docker, Python 3.10, Node.js, npm

---

## Setup Instructions

### Backend Setup:
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/Codebase-Query-Chatbot.git
   ```
2. Navigate to the backend folder and set up a virtual environment:
   ```bash
   cd Codebase-Query-Chatbot/backend
   python3 -m venv venv
   source venv/bin/activate  # or .\venv\Scripts\activate for Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the `.env` file with your **Pinecone** and **OpenAI API keys**.
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd Codebase-Query-Chatbot/chatbot-frontend
   ```
2. Install dependencies and start the React app:
   ```bash
   npm install
   npm start
   ```

---


<img width="900" alt="Screenshot 2024-11-30 at 9 11 35 PM" src="https://github.com/user-attachments/assets/d66a8877-71a0-490a-b4a6-35cd9e6a85b0">
