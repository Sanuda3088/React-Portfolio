
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Blog/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
