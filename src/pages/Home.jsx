import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="home-page">
        <h2>Craft the perfect email, faster!</h2>
        <p>Transform your thoughts into polished emails in seconds. Choose your tone, add your ideas, and watch AI craft the perfect message.</p>
        <Link to="/generate" className="home-btn">Start Generating</Link>
      </div>
    </div>
  );
}

export default Home;
