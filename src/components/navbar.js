import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <span id="logo">Bookstore CMS</span>
    <nav className="nav-items">
      <Link to="/books" className="nav-item">Books</Link>
      <Link to="/categories" className="nav-item">Categories</Link>
    </nav>
  </header>
);

export default Navbar;
