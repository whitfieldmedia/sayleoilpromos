import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import './assets/css/styles.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}