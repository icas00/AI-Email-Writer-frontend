import React, { useState, useEffect } from 'react';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('emailHistory') || '[]');
    setHistory(stored);
  }, []);

  if (!history.length) return <p style={{ textAlign: 'center', marginTop: '20px' }}>No history yet.</p>;

  return (
    <div className="history-page">
      <h2>Email History</h2>
      <ul>
        {history.map((item, idx) => (
          <li key={idx}>
            <p><strong>Input:</strong> {item.input}</p>
            <p><strong>Tone:</strong> {item.tone}</p>
            <p><strong>Response:</strong> {item.response}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
