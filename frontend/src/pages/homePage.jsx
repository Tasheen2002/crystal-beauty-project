import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Your journey starts here</h2>
        <p>Discover amazing content and explore new ideas with us.</p>
        <button className="cta-button">Get Started</button>
        <Link to="/login">Login</Link>
      </section>

      <footer className="footer">
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
