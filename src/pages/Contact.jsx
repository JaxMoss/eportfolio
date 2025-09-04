import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, we'll just show an alert. In a real application, 
    // you would send this data to a server or email service
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p>
          I'd love to hear from you! Whether you have questions about my engineering projects,
          want to discuss technical communication opportunities, potential collaborations,
          or just want to connect about shared interests in engineering and innovation,
          please don't hesitate to reach out.
        </p>
      </div>
      
      <div className="contact-form">
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '10px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h2>Get In Touch</h2>
          <p style={{ fontSize: '1.1rem', color: '#500000', fontWeight: '500' }}>
            📧 mossjackson@tamu.edu
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
            Please use the form below to send me a message, or email me directly at the address above.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this regarding?"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Please share your message, questions, or how I can help you..."
            ></textarea>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
        
        <div style={{ 
          marginTop: '3rem', 
          padding: '1.5rem', 
          background: '#fff3cd', 
          borderRadius: '8px',
          border: '1px solid #ffeaa7'
        }}>
          <p style={{ margin: 0, color: '#856404', fontSize: '0.9rem' }}>
            <strong>Note:</strong> For privacy and security reasons, I do not share my personal 
            phone number on this website. Please use email for all communications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
