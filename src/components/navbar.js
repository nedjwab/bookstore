import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header>
    <span id="logo">Bookstore CMS</span>
    <nav className="nav-items">
      <Link to="/books" className="nav-item">Books</Link>
      <Link to="/categories" className="nav-item">Categories</Link>
    </nav>
    <div className="logo-section">
      <span className="user-icon"><FaUser /></span>
    </div>
  </header>
);

export default Navbar;
