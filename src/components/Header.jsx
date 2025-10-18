import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Email Writer AI</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/generate">Generate Email</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
}

export default Header;
