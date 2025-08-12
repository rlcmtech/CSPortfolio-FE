import React, { useState } from 'react';
import './CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    // Later, send data to a backend or use EmailJS
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

         <label>Company:</label>
        <input
          type="text"
          name="company"
          placeholder="Company or Organization Name"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          placeholder="Resume Request, Interview Schedule, or Others "
          value={formData.subject}
          onChange={handleChange}
          required
        />  

        <label>Message:</label>
        <textarea
          name="message"
          placeholder="Hello, can you forward your resume? or Are you available for an interview?"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
