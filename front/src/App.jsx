import './App.css';
import Hero from './components/Pages/Hero';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Work from './components/Pages/Work';
import Educ from './components/Pages/Educ';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div className="app-container">
      <header id='header-style'>
        <nav className="nav-wrapper">
          <div className="logo">Luis Magtira</div>
          <ul>
            <li className='menu-li'><a href="#hero">Home</a></li>
            <li className='menu-li'><a href="#projects">Portfolio</a></li>
            <li className='menu-li'><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="work"><Work /></section>
        <section id="educ"><Educ /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer id='footer-style'>
        <div className='footerPart'>Footer here</div>
      </footer>
    </div>
  );
}

export default App;
