import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/">
            <a className="brand-logo">Logo</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
