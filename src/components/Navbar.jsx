import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


export default function Navbar({ isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        {/* Brand/logo with gradient text */}
        <Link className="navbar-brand fw-bold" to="/">
          <span className="gradient-text">open school</span>
        </Link>
        
        {/* Mobile menu toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/home"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/courses"
              >
                Courses
              </NavLink> */}
              <NavLink to="/courses" className="nav-link">Courses</NavLink>

            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/contactus"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Auth buttons */}
          <div className="d-flex align-items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="btn btn-outline-light btn-sm">
                  Dashboard
                </Link>
                <button 
                  onClick={onLogout} 
                  className="btn btn-danger btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* CSS for gradient text */}
      <style jsx>{`true
        .gradient-text {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .navbar {
          padding: 0.8rem 0;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.9) !important;
          padding: 0.5rem 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .nav-link {
          position: relative;
          margin: 0 0.5rem;
          padding: 0.5rem 0;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #4facfe;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover:after,
        .nav-link.active:after {
          visibility: visible;
          width: 100%;
        }
      `}</style>
    </nav>
  );
}

