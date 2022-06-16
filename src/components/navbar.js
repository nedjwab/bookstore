import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1 id="logo">Bookstore CMS</h1>
    <nav className="nav-items">
      <Link to="/books" className="nav-item">BOOKS</Link>
      <Link to="/categories" className="nav-item">Categories</Link>
    </nav>
  </header>
);

export default Navbar;
