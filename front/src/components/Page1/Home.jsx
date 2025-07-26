import React from 'react';
import Hero from './Hero';
import About from './About';
import Educ from './Educ';
import WorkExp from './WorkExp';
import './Home.scss'; 

const Home = () => {
  return (
    <div>
      <header>
        <h1>This is home</h1>
        <nav>

<a href="#about">About</a>
<a href="#educ">Education</a>
<a href="#workexp">Work Experience</a>
        </nav>

      </header>

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="educ">
          <Educ />
        </section>

        <section id="workexp">
          <WorkExp />
        </section>

    </div>
  );
};

export default Home;
