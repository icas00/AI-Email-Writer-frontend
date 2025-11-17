import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="home-page">
        <h2>Craft the perfect email, faster.</h2>
        <p>Just jot down some ideas, pick a tone, and let AI handle the rest. It's like magic, but for your inbox.</p>
        <Link to="/generate" className="home-btn">Start Generating</Link>
      </div>
    </div>
  );
}

export default Home;
