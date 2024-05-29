import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav openNav={openNav} />
        <MobileNav nav={isNavOpen} closeNav={closeNav} />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </header>
    </div>
  );
}

export default App;
