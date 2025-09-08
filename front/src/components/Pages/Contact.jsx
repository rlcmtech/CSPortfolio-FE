import React, { useState } from 'react';
import './CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({

    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:3001/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if(result.success){
            alert('✅ Your message was sent successfully!');
            setFormData({ email: '', company: '', subject: '', message: '' });
        } else {
            alert('❌ Failed to send message: ' + result.message);
        }

    } catch (err) {
        console.error(err);
        alert('❌ Error sending message');
    }
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
