import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contex/auth-contex';

function Navbar(props) {
  const history = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = (evt) => {
    evt.preventDefault();
    auth.logout();
    history('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <div className="container">
          <span className="brand-logo">App</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
