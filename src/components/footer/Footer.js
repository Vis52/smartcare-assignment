import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 px-4 mt-5 border-top bg-light">
      <p className="col-md-4 mb-0 text-muted">© 2025 SmartCare Hospital</p>
      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <h2>Smart Care</h2>
      </a>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="/feature" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="/test" className="nav-link px-2 text-muted">Testimonials</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
 