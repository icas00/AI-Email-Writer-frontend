import React, { useState, useEffect } from 'react';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('emailHistory') || '[]');
    setHistory(stored);
  }, []);

  if (!history.length) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Your generated emails will appear here. Go on, give it a try!</p>;
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>Your History</h2>
      {history.map((item, idx) => (
        <div key={idx} className="card history-item">
          <p><strong>Your prompt:</strong> {item.input}</p>
          <p><strong>Selected tone:</strong> {item.tone}</p>
          <hr style={{ margin: '15px 0', border: '1px solid var(--light-gray)' }} />
          <pre>{item.response}</pre>
        </div>
      ))}
    </div>
  );
}

export default History;
