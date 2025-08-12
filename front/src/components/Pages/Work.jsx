import React, { useState, useEffect, useRef } from 'react'
import './CSS/Work.css'

const Work = () => {
  const [openIndexes, setOpenIndexes] = useState([]) // multiple open
  const containerRef = useRef(null)

  const jobs = [
    {
      title: "Technical and Customer Support Representative - 6 Years",
      desc: [
        "Verified customer identities and resolved account security concerns in compliance with authentication protocols.",
        "Troubleshot connectivity, login, and access issues, escalating complex cases to higher-tier teams.",
        "Documented incidents in ticketing systems with detailed technical notes for follow-up."
      ]
    },
    {
      title: "Technical Support Specialist - 3 Years",
      desc: [
        "Handled advanced troubleshooting for software issues.",
        "Worked closely with developers to resolve bug reports.",
        "Created knowledge base articles for recurring issues."
      ]
    },
    {
      title: "Customer Support Associate - 2 Years",
      desc: [
        "Assisted customers with billing and account inquiries.",
        "Managed support tickets and follow-ups efficiently.",
        "Provided product training to new clients."
      ]
    }
  ]

  const toggleJob = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  // Click outside closes all
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenIndexes([])
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div id='work' ref={containerRef}>
      <ul className='work-ul'>
        {jobs.map((job, index) => (
          <li className='work-li' key={index}>
            <div onClick={() => toggleJob(index)} className='work-title'>
              <h5>{job.title}</h5>
            </div>
            <div
              className={`work-desc-container ${
                openIndexes.includes(index) ? 'open' : ''
              }`}
            >
              <ul className='work-desc-ul'>
                {job.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work
