import React from 'react';

function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3 className="footer-brand mb-3">
              <i className="fas fa-mountain me-2"></i>Montclair
            </h3>
            <p>Established 1924. Crafting timeless elegance for generations.</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Atelier</h5>
            <p>14 Heritage Lane<br />Savile Row, London W1S 3PR</p>
            <p>by appointment only</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Contact</h5>
            <p><i className="fas fa-envelope me-2"></i>atelier@montclair.com</p>
            <p><i className="fas fa-phone me-2"></i>+44 20 7946 0958</p>
            <div className="social-icons mt-3">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 1924-2024 Montclair. All craftsmanship preserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;