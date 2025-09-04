import React from 'react'

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p>
          This section will showcase my technical communication projects, engineering design work,
          and academic assignments throughout the semester. As a Mechanical Engineering student,
          these projects will demonstrate the intersection of technical expertise and effective communication.
          Check back regularly to see my latest work!
        </p>
      </div>
      
      <div style={{
        background: '#f8f9fa',
        padding: '3rem',
        borderRadius: '15px',
        textAlign: 'center',
        border: '2px dashed #dee2e6'
      }}>
        <div style={{
          fontSize: '4rem',
          color: '#dee2e6',
          marginBottom: '1rem'
        }}>
          📁
        </div>
        <h2 style={{ color: '#6c757d', marginBottom: '1rem' }}>
          Projects Coming Soon
        </h2>
        <p style={{ color: '#6c757d', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          This space will be filled with my technical communication and engineering projects as I complete
          them throughout the semester. Each project will demonstrate different aspects of technical
          communication within an engineering context, including:
        </p>

        <div className="projects-grid" style={{ marginTop: '2rem' }}>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Engineering Documentation</h3>
            <p>Technical reports, design documentation, and SOLIDWORKS project presentations</p>
          </div>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Innovation Projects</h3>
            <p>Aggies Invent submissions, engineering design challenges, and collaborative solutions</p>
          </div>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Platform Development</h3>
            <p>Uru platform contributions, financial dashboards, and technical system documentation</p>
          </div>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Academic Projects</h3>
            <p>Course assignments, research presentations, and technical communication coursework</p>
          </div>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Visual Communication</h3>
            <p>Engineering diagrams, technical infographics, and design visualization</p>
          </div>
          <div className="project-card" style={{ opacity: 0.7 }}>
            <h3>Professional Development</h3>
            <p>BlueStamp Engineering projects, NASA Space Camp documentation, and skill demonstrations</p>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '3rem', 
          padding: '1.5rem', 
          background: '#d1ecf1', 
          borderRadius: '8px',
          border: '1px solid #bee5eb'
        }}>
          <p style={{ margin: 0, color: '#0c5460', fontSize: '0.95rem' }}>
            <strong>Portfolio Update:</strong> This projects section will be completed and 
            populated with my work when I turn in my final portfolio at the end of the semester. 
            Each project will include detailed descriptions, process documentation, and 
            reflections on the technical communication principles applied.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
