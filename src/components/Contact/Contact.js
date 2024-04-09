import React, { useState } from 'react';
import './ContactUs.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder='Name'
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            placeholder='Email id' 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            name="message" 
            placeholder='Message'
            value={formData.message} 
            onChange={handleInputChange} 
            rows="4" 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
