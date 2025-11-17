import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="site-title">Email Writer AI</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/generate">Generate</Link>
            <Link to="/history">History</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
