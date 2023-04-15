import React, { lazy, Suspense, useState, useEffect } from 'react';
import logo from '../../assets/logo/sitelogo2.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Home from '../Home/Home';
import Products from '../../components/Products/Products';
import Login from './../../components/Login/Login';
import Button from 'react-bootstrap/Button';
import Cart from '../../components/User/Cart/Cart';
import ProtectedRoute from '../../util/ProtectedRoute';
import AuthCheck from '../../Services/AuthCheck';
import { FaUser } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';

const Home = React.lazy(() => import('../Home/Home'));


export default function Menubar() {
  
  const [token, setToken] = useState();
  const [checkAuth, reloadAuthCheck] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('auth_token'))
  }, [token]) // <-- here put the parameter to listen

  return (
    <Router>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} height="100" alt="logo" />
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '70%', marginLeft: 20 }}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>

          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '20%' }}>
            <ul className="navbar-nav mr-auto">
              <AuthCheck readAuth={token}>
                <li className="nav-item active">
                  <Link className="nav-link" to="/"><FaUser title="Profile"  /> Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-cart"><BsCartFill />My Cart</Link>
                </li>
              </AuthCheck>
              
            </ul> 
            
            <div>
              <Login setToken={setToken} />
            </div>

          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>
            }
          />
          <Route path="/products" element={<Products />} />

          <Route path="/my-cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>

          } />
        </Routes>
      </div>
    </Router>
  );
}
