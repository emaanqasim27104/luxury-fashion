import React from 'react';

function History() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="section-title mb-4">Our Heritage</h1>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
          <div className="history-image-container" style={{
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <img src="/history.png" alt="Montclair Heritage" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }} />
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">A Legacy of Excellence Since 1924</h2>
          <p className="mb-4">Founded in the heart of Savile Row, Montclair has been synonymous with timeless elegance and uncompromising quality for generations. Our story began with a single tailor's bench and a commitment to craftsmanship that transcends trends.</p>
          <p className="mb-4">Through decades of change, one thing remains constant: our dedication to creating garments that tell stories, build legacies, and stand the test of time. Each piece carries forward the knowledge and skill of master artisans who came before.</p>
          <p>Today, we continue this tradition, blending heritage techniques with contemporary sensibilities to create clothing that will be cherished for years to come.</p>
        </div>
      </div>
    </div>
  );
}

export default History;