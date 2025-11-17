import React from 'react';
import './Loading.css';

// Some fun messages to show while the AI is "thinking"
const loadingMessages = [
  'Brewing your email...',
  'Consulting the dictionary...',
  'Finding the right words...',
  'Doing some AI magic...',
  'Almost there...',
];

function Loading() {
  // Pick a random message to display each time
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  const message = loadingMessages[randomIndex];

  return (
    <div className="loading-container">
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Loading;
