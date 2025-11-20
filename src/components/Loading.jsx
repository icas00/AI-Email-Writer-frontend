import React from 'react';
import './Loading.css';

// Some fun messages to show while the AI is "thinking"
const loadingMessages = [
  'Fetching your email...',
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
      <div className="envelope-animation">
        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-body"></div>
          <div className="letter"></div>
        </div>
        <div className="sparkles">
          <span className="sparkle sparkle-1"></span>
          <span className="sparkle sparkle-2"></span>
          <span className="sparkle sparkle-3"></span>
          <span className="sparkle sparkle-4"></span>
        </div>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Loading;
