import React from 'react'

function Home() {
  return (
    <div className="page">
      <div className="hero-section">
        <h1 className="hero-title">JaxMoss</h1>
        <p className="hero-subtitle">Technical Communication Student</p>
        
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
        
        <div className="info-grid">
          <div className="info-card">
            <h3>Name</h3>
            <p>JaxMoss</p>
          </div>
          <div className="info-card">
            <h3>Major</h3>
            <p>Technical Communication</p>
          </div>
          <div className="info-card">
            <h3>School</h3>
            <p>Your University Name</p>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          <h2>Welcome to My Portfolio</h2>
          <p>
            This website showcases my journey and work as a technical communicator. 
            Here you'll find examples of my projects, learn more about my background, 
            and discover how I can help bridge the gap between complex technical 
            concepts and clear, accessible communication.
          </p>
          <p>
            I'm passionate about making technology understandable and accessible to 
            everyone. Through careful research, thoughtful design, and clear writing, 
            I strive to create content that serves both users and organizations effectively.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
