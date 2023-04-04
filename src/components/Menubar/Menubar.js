import React from 'react';
import logo from '../../assets/logo/logosite.png';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Products from './../Products/Products';

export default function Menubar () {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} width="100" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success my-2 my-sm-0 float-right"
              type="submit"
            >
              Login
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}
