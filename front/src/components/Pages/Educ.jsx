import React, { useState, useEffect, useRef } from 'react';
import './CSS/Educ.css';

const Educ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const containerRef = useRef(null);

  const educData = [
    {
      title: 'Certificates',
      skills: ['CompTIA Security +', 'Fullstack Web Development', 'Skill 3'],
    },
    {
      title: 'Education',
      skills: ['B.S. in Information Technology', 'M.A. in Educational Management', 'Skill 3'],
    },
  ];

  const toggleItem = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Click outside closes all
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenIndexes([]);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section id="educ" ref={containerRef}>
      <h4>ACADEMIC BACKGROUND</h4>
      <ul className="educ-ul">
        {educData.map((item, index) => (
          <li className="educ-li" key={index}>
            <div className="educ-title" onClick={() => toggleItem(index)}>
              {item.title}
            </div>
            <div className={`educ-desc-container ${openIndexes.includes(index) ? 'open' : ''}`}>
              <ul className="educ-desc-ul">
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
