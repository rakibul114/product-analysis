import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
      <div>
        <nav className="bg-slate-300 text-2xl text-center py-8 font-medium md:w-auto w-100%">          
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