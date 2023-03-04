import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/HomeScreen.css';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <div className="black-overlay"></div>
      <Navbar />
      <header className="cognizance">
        <div class="neon">
          <h3>COGNIZANCE'23</h3>
        </div>
      </header>
      <section className="club-container">
        <div class="words word-1">
          <span>C</span>
          <span>S</span>
          <span>E</span>
          <span>&nbsp;&nbsp;</span>
          <span>C</span>
          <span>O</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>&nbsp;&nbsp;</span>
          <span>C</span>
          <span>L</span>
          <span>U</span>
          <span>B</span>
        </div>

        <div class="words word-2">
          <span>p</span>
          <span>r</span>
          <span>e</span>
          <span>s</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>s</span>
        </div>
      </section>
      <section className="zcoders-container">
        <div className="zcoders">
          <span style={{ '--i': '1' }}>7</span>
          <span style={{ '--i': '2' }}>'</span>
          <span style={{ '--i': '3' }}>z</span>
          <span style={{ '--i': '4' }}>&nbsp;&nbsp;</span>
          <span style={{ '--i': '5' }}>C</span>
          <span style={{ '--i': '6' }}>O</span>
          <span style={{ '--i': '7' }}>D</span>
          <span style={{ '--i': '8' }}>E</span>
          <span style={{ '--i': '9' }}>R</span>
          <span style={{ '--i': '10' }}>S</span>
        </div>
      </section>
      <div className="get-started-button-container">
        <Link to="/guidelines" className="get-started-button">
          Get Started <i className="fa-solid fa-arrow-right arrows"></i>
        </Link>
      </div>
    </section>
  );
}
