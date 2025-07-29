import React from 'react';
import './CSS2/Projects.css';

const Projects = () => {
  return (
    <section id="projects">

      <ul className="proj-ul">

        <li className="proj-li">
          <input type="checkbox" id="toggle-1" className="toggle-box" />

          <label htmlFor="toggle-1" className="proj-head">
            <h4>Project Title</h4>
            <img src="sample.jpg" alt="project" />
          </label>

          <div className="proj-desc">
            <p>Description 1</p>
            <p>Description 2</p>
          </div>
        </li>

        <li className="proj-li">
          <input type="checkbox" id="toggle-2" className="toggle-box" />

          <label htmlFor="toggle-2" className="proj-head">
            <h4>Another Project</h4>
            <img src="sample.jpg" alt="project" />
          </label>

          <div className="proj-desc">
            <p>Description A</p>
            <p>Description B</p>
          </div>
        </li>

        <li className="proj-li">
          <input type="checkbox" id="toggle-3" className="toggle-box" />

          <label htmlFor="toggle-3" className="proj-head">
            <h4>Another Project</h4>
            <img src="sample.jpg" alt="project" />
          </label>

          <div className="proj-desc">
            <p>Description A</p>
            <p>Description B</p>
          </div>
        </li>

        

        {/* Add more cards by duplicating the block above and changing toggle-3, toggle-4, etc. */}

      </ul>
    </section>
  );
};

export default Projects;
