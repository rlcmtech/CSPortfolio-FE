import React from 'react';
import Projects from './Projects';
import Contact from './Contact';


const Portfolio = () => {
  return (
    <div>
              <header>
        <h1>This is Portfolio</h1>
        <nav>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

        </nav>
        
      </header>

        <section id="projects">
          <Projects />
        </section>

        <section id="contacts">
          <Contact />
        </section>
    </div>
  )
}

export default Portfolio
