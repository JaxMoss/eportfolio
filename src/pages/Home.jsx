import React from 'react'

function Home() {
  return (
    <div className="page">
      <div className="hero-section">
        <h1 className="hero-title">Jackson Moss</h1>
        <p className="hero-subtitle">Mechanical Engineering Student & Technical Communicator</p>

        {/* Placeholder for profile image - you can replace this with your actual image */}
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #500000 0%, #800000 100%)', // Texas A&M maroon colors
          margin: '2rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          border: '4px solid #500000'
        }}>
          JM
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Name</h3>
            <p>Jackson Moss</p>
          </div>
          <div className="info-card">
            <h3>Major</h3>
            <p>Mechanical Engineering</p>
          </div>
          <div className="info-card">
            <h3>School</h3>
            <p>Texas A&M University</p>
          </div>
          <div className="info-card">
            <h3>Year</h3>
            <p>Sophomore</p>
          </div>
          <div className="info-card">
            <h3>Status</h3>
            <p>National Merit Finalist</p>
          </div>
          <div className="info-card">
            <h3>Residence</h3>
            <p>Appelt Hall, College Station, TX</p>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          <h2>Welcome to My Portfolio</h2>
          <p>
            This website showcases my journey as a Mechanical Engineering student at Texas A&M University
            and my development as a technical communicator. As a National Merit Finalist, I entered
            directly into the Mechanical Engineering program, bypassing the traditional ETAM process,
            which reflects my strong academic foundation and commitment to engineering excellence.
          </p>
          <p>
            Here you'll find examples of my technical projects, academic achievements, and professional
            development. I'm passionate about combining rigorous engineering principles with effective
            communication skills, preparing for a future where I can lead complex engineering projects
            while clearly articulating solutions to diverse stakeholders.
          </p>
          <p>
            My experience spans advanced engineering design using SOLIDWORKS, participation in prestigious
            programs like BlueStamp Engineering and NASA Space Camp Advanced Training, and active involvement
            in innovation challenges such as Aggies Invent. I'm also contributing to cutting-edge AI platform
            development through my work with the Uru platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
