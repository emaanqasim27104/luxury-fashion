import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img src="/main.png" alt="Montclair Timeless Style" className="hero-img" />
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">Timeless Style</h1>
                <h2 className="hero-subtitle">Enduring Quality</h2>
                <p className="hero-text">Crafting elegance through heritage fabrics and meticulous design.</p>
                <Link to="/collection" className="btn btn-primary btn-lg">View Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">The Montclair Distinction</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-img-container">
                <img src="/wool.png" alt="Natural Fibers" className="feature-img" />
              </div>
              <h4 className="mt-4">Natural Fibers</h4>
              <p>Only the finest wool, cashmere, and linen from sustainable sources.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-img-container">
                <img src="/tailoring.png" alt="Bespoke Tailoring" className="feature-img" />
              </div>
              <h4 className="mt-4">Bespoke Tailoring</h4>
              <p>Custom-fitted garments for timeless silhouettes that endure.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-img-container">
                <img src="/crafts.png" alt="Heritage Craftsmanship" className="feature-img" />
              </div>
              <h4 className="mt-4">Heritage Craftsmanship</h4>
              <p>Techniques perfected over generations of master artisans.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Preview */}
      <div className="collection-preview py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Signature Collections</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="category-card">
                <div className="category-img-container suits">
                  <img src="/suits.png" alt="Suits & Blazers" className="category-img" />
                </div>
                <h3 className="text-center mt-3">Suits & Blazers</h3>
                <p className="text-center">Timeless tailoring for every occasion</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card">
                <div className="category-img-container dresses">
                  <img src="/dresses.png" alt="Dresses" className="category-img" />
                </div>
                <h3 className="text-center mt-3">Dresses</h3>
                <p className="text-center">Elegance in every stitch and seam</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card">
                <div className="category-img-container accessories">
                  <img src="/accessories.png" alt="Accessories" className="category-img" />
                </div>
                <h3 className="text-center mt-3">Accessories</h3>
                <p className="text-center">Finishing touches of sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;