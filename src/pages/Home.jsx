import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to Email Writer AI</h2>
      <p>Create professional and friendly emails in seconds with AI.</p>
      <Link to="/generate" className="home-btn">Generate Email</Link>
    </div>
  );
}

export default Home;
