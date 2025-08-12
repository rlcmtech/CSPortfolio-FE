import React, { useState } from 'react';
import './CSS/Educ.css'

const Educ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkills = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const educData = [
    {
      title: 'Certificates',
      skills: ['CompTIA Security +', 'Fullstack Web Developent', 'Skill 3'],
    },
    {
      title: 'Education',
      skills: ['B.S. in Information Technology', 'M.A. in Educational Management', 'Skill 3'],
    },
    
  ];  

  return (
    <section id="educ">
      <h4>ACADEMIC BACKGROUND</h4>
      <ul id="educ-ul">
        {educData.map((item, index) => (
          <li
            className="educ-li center-educ"
            key={index}
            onClick={() => toggleSkills(index)}
          >
            <div>{item.title}</div>
            <div className={`skills ${activeIndex === index ? 'show' : ''}`}>
              <ul>
                {item.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educ;
