# Codebase-Query-Chatbot
Overview
This Codebase Query Chatbot enables developers to interact with their codebase through an AI chatbot interface, providing answers based on the code's context. Built with a React.js frontend and a FastAPI backend, this project integrates Pinecone for fast vector search and uses Retrieval-Augmented Generation (RAG) powered by an LLM for enhanced query responses. It is optimized for embedding individual functions instead of entire files to improve accuracy.

---

Key Features
- Interactive Chatbot: Query your codebase via an intuitive React.js frontend.
- FastAPI Backend: Handles user queries and integrates with Pinecone for fast and accurate search.
- RAG (Retrieval-Augmented Generation): Combines search with generative models to return contextually relevant answers.
- Function-Level Embeddings: Focus on embedding individual functions rather than entire files for more precise query results.
- Scalable and Optimized: Built to handle large codebases and provide fast responses.

---

Technologies Used
- Frontend: React.js, Axios, React Router
- Backend: FastAPI, Uvicorn, Pinecone, Langchain, Pydantic, OpenAI, Sentence-Transformers
- Development Tools: Git, Docker, Python 3.10, Node.js, npm

---

Setup Instructions

Backend Setup:
1. Clone the repository:  
     git clone https://github.com/yourusername/Codebase-Query-Chatbot.git
  
3. Navigate to the backend folder and set up a virtual environment:
     cd Codebase-Query-Chatbot/backend
     python3 -m venv venv
     source venv/bin/activate  # or .\venv\Scripts\activate for Windows
   
5. Install dependencies:
     pip install -r requirements.txt
   
7. Set up the `.env` file with your Pinecone and OpenAI API keys.
   
9. Run the FastAPI server:
     uvicorn main:app --reload

Frontend Setup:
1. Navigate to the frontend folder:
     cd Codebase-Query-Chatbot/chatbot-frontend
   
3. Install dependencies and start the React app:
     npm install
     npm start

---

Usage
1. Open the React app (typically at `http://localhost:3000`).
2. Ask queries about your codebase, e.g., "What does `functionName()` do?" or "How is `functionX` used?"
3. The chatbot responds with contextually relevant answers by querying the backend, which uses embeddings and Pinecone for efficient retrieval.

---

Project Structure

```
/Codebase-Query-Chatbot
│
├── /backend                   # FastAPI backend code
│   ├── /app                    # FastAPI application
│   ├── /models                 # Pydantic models
│   ├── /embeddings             # Function embedding code
│   └── main.py                 # FastAPI entry point
│
├── /frontend                  # React.js frontend code
│   ├── /src                    # React source files
│   ├── /components             # Chatbot components
│   └── App.js                  # Main component
│
├── .env                        # Environment variables (Pinecone, OpenAI keys)
├── requirements.txt            # Backend dependencies
└── package.json                # React dependencies
```

---


<img width="900" alt="Screenshot 2024-11-30 at 9 11 35 PM" src="https://github.com/user-attachments/assets/d66a8877-71a0-490a-b4a6-35cd9e6a85b0">
