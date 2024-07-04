import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Technologies from './components/Technologies';
import ToptoButton from './components/ToptoButton';

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
      </header>
      <main>
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Blog />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToptoButton />
    </div>
  );
}

export default App;
