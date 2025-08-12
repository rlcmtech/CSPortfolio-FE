import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Hero from './components/Pages/Hero';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Work from './components/Pages/Work';
import Educ from './components/Pages/Educ';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header id='header-style'>
          <nav className="nav-wrapper">
            <div className="logo">Luis Magtira</div>
            <ul>
              <li className='menu-li'><NavLink to="/">Home</NavLink></li>
              <li className='menu-li'><NavLink to="/Portfolio">Portfolio</NavLink></li>
              <li className='menu-li'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </header>

        <main className="content">
          <Hero />
          <Skills />
          <Projects />
          <Work />
          <Educ />
          <Contact />
        </main>

        <footer id='footer-style'>
          <div className='footerPart'>Footer here</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;