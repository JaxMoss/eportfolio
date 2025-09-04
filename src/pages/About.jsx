import React from 'react'

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      
      {/* Placeholder for profile image - you can replace this with your actual image */}
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: '2rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>
        JM
      </div>
      
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Personal Portfolio Website</h2>
        <p>
          Welcome to my personal portfolio website! This site serves as a comprehensive 
          showcase of my work and development as a technical communicator. Here, you'll 
          find a curated collection of my projects, writing samples, and professional 
          accomplishments that demonstrate my skills in making complex technical 
          information accessible and engaging.
        </p>
        
        <p>
          This portfolio will feature my works as a technical communicator, including 
          documentation projects, user guides, instructional materials, and other 
          communication artifacts that highlight my ability to bridge the gap between 
          technical complexity and user understanding.
        </p>
        
        <h2>About Me</h2>
        <p>
          I am a dedicated technical communication student with a passion for clear, 
          effective communication. My interests span across various areas of technical 
          writing, user experience design, and information architecture. I believe that 
          good technical communication is not just about conveying information—it's 
          about creating meaningful connections between technology and the people who use it.
        </p>
        
        <h2>My Interests</h2>
        <div className="info-grid" style={{ marginTop: '2rem' }}>
          <div className="info-card">
            <h3>Technical Writing</h3>
            <p>Creating clear, concise documentation that helps users accomplish their goals</p>
          </div>
          <div className="info-card">
            <h3>User Experience</h3>
            <p>Designing information experiences that are intuitive and user-centered</p>
          </div>
          <div className="info-card">
            <h3>Digital Communication</h3>
            <p>Leveraging digital tools and platforms to enhance communication effectiveness</p>
          </div>
          <div className="info-card">
            <h3>Information Design</h3>
            <p>Organizing and presenting complex information in visually appealing ways</p>
          </div>
        </div>
        
        <p style={{ marginTop: '2rem' }}>
          Through this portfolio, you'll get to know me not just as a technical communicator, 
          but as someone who is genuinely excited about the power of effective communication 
          to make technology more accessible and useful for everyone.
        </p>
      </div>
    </div>
  )
}

export default About
