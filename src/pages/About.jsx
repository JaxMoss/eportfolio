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
      
      <div style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
        <h2>Personal Portfolio Website</h2>
        <p>
          Welcome to my personal portfolio website! This site features my works as a technical communicator
          and showcases my academic journey as a sophomore Mechanical Engineering student at Texas A&M University.
        </p>

        <p>
          As a National Merit Finalist, I was able to enter directly into the Mechanical Engineering program,
          bypassing the traditional ETAM (Entry to a Major) process. This early admission reflects my strong
          academic foundation and commitment to engineering excellence.
        </p>

        <h2>About Me</h2>
        <p>
          I am passionate about combining technical expertise with effective communication skills, preparing
          for a future where I can lead complex engineering projects while clearly articulating solutions to
          diverse stakeholders. This portfolio demonstrates my evolution as both an engineer and technical communicator.
        </p>
        
        <h2>My Diverse Interests and Experiences</h2>

        <h3>Engineering and Technical Innovation</h3>
        <ul style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          <li>Advanced engineering design using professional software like SOLIDWORKS</li>
          <li>Participation in prestigious engineering programs including BlueStamp Engineering and NASA Space Camp Advanced Training</li>
          <li>Active involvement in innovation challenges such as Aggies Invent, focusing on next-generation secure production technologies</li>
          <li>Interest in robotics, manufacturing, and technical problem-solving</li>
        </ul>

        <h3>Technical Communication Excellence</h3>
        <ul style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          <li>Developing expertise in translating complex engineering concepts into clear, accessible communication</li>
          <li>Building skills to bridge technical and non-technical audiences through effective documentation and presentation</li>
        </ul>

        <h3>Academic Achievement</h3>
        <ul style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          <li>National Merit Finalist recognition for academic excellence</li>
          <li>Successfully managing rigorous coursework including advanced engineering mathematics, design principles, and technical writing</li>
        </ul>

        <h3>Leadership and Innovation</h3>
        <ul style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          <li>Contributing to cutting-edge AI platform development through work with the Uru platform</li>
          <li>Creating financial dashboards and technical documentation</li>
          <li>Participating in university innovation competitions and collaborative engineering projects</li>
        </ul>

        <div className="info-grid" style={{ marginTop: '3rem' }}>
          <div className="info-card">
            <h3>Current Technical Competencies</h3>
            <p><strong>CAD/Design:</strong> SOLIDWORKS<br/>
            <strong>Programming:</strong> AI platform development, financial modeling<br/>
            <strong>Coursework:</strong> Mechanical Engineering fundamentals, technical writing</p>
          </div>
          <div className="info-card">
            <h3>Key Experiences</h3>
            <p><strong>BlueStamp Engineering</strong> - Multi-week intensive program<br/>
            <strong>NASA Space Camp</strong> - Advanced aerospace training<br/>
            <strong>Aggies Invent</strong> - University innovation competition</p>
          </div>
        </div>
        
        <p style={{ marginTop: '2rem' }}>
          Through this portfolio, you'll get to know me as an engineering student who values both
          technical precision and clear communication. I believe that the most impactful engineers
          are those who can not only solve complex problems but also effectively communicate their
          solutions to make technology more accessible and useful for everyone.
        </p>
      </div>
    </div>
  )
}

export default About
