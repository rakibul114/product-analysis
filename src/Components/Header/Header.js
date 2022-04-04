import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
      <div className="w-auto md:w-auto lg:w-auto">
        <nav className="bg-slate-300 text-2xl text-center py-8 font-medium">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="reviews">
            Reviews
          </Link>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>
      </div>
    );
};

export default Header;