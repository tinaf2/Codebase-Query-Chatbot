import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css";

const QueryForm = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => setQuery(event.target.value);

  const sendQueryToBackend = async () => {
    if (!query) return;

    // Add user message to the chat history
    setMessages([...messages, { text: query, sender: "user" }]);
    setQuery("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/query", { query });
      const botResponse = res.data.response;

      // Add bot response to the chat history
      setMessages([
        ...messages,
        { text: query, sender: "user" },
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      setMessages([
        ...messages,
        { text: query, sender: "user" },
        {
          text: "Sorry, there was an error processing your query.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <h1>Ask about the codebase</h1>

      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <textarea
        value={query}
        onChange={handleInputChange}
        placeholder="Enter your question here..."
        rows="2"
        className="query-input"
      />

      <button
        className="submit-button"
        onClick={sendQueryToBackend}
        disabled={loading}
      >
        {loading ? <div className="spinner"></div> : "Ask"}
      </button>
    </div>
  );
};

export default QueryForm;
