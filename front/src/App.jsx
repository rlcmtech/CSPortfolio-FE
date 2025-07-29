import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Page1/Home';
import Portfolio from './components/Page2/Portfolio';
import Contact from './components/Page2/Contact';


function App() {
  return (
    <Router>
  <div className="app-container">
    <header id='header-style'>
      <nav>
        <ul>
          <li>Welcome to my page</li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>

    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <footer id='footer-style'>
      <div className='footerPart'>Footer here</div>
    </footer>
  </div>
</Router>
  );
}

export default App;
