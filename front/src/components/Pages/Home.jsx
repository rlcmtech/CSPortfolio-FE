import React from 'react';
import Hero from './Hero';
import About from './About';
import Educ from './Educ';
import WorkExp from './WorkExp';
import './CSS/Home.css'; 

const Home = () => {
  return (
    <div>
      

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

         <section id="workexp">
          <WorkExp />
        </section>

        <section id="educ">
          <Educ />
        </section>

       

    </div>
  );
};

export default Home;
