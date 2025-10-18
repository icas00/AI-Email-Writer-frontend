import React from 'react';

function EmailCard({ email }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert('Copied to clipboard!');
  };

  return (
    <div className="email-card">
      <p>{email}</p>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default EmailCard;
