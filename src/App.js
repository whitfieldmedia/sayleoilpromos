import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
