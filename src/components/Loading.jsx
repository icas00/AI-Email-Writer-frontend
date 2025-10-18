import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Generating your email...</p>
    </div>
  );
}

export default Loading;
