import React, { useState } from 'react';

function Collection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {id: 1, img: "/wool blazer.png", category: "SUITS", title: "Tailored Wool Blazer", desc: "Single-breasted, notch lapel", price: "$895", fabric: "Wool", color: "#336659"},
    {id: 2, img: "/overcoat.png", category: "COATS", title: "Cashmere Overcoat", desc: "Double-breasted, wool lining", price: "$1250", fabric: "Cashmere", color: "#0e1c4f"},
    {id: 3, img: "/evening dress.png", category: "DRESSES", title: "Silk Evening Dress", desc: "Bias cut, draped back", price: "$750", fabric: "Silk", color: "#bba591"},
    {id: 4, img: "/summer suit.png", category: "SUITS", title: "Linen Summer Suit", desc: "Unlined, natural texture", price: "$650", fabric: "Linen", color: "#f3efe8"},
    {id: 5, img: "/knit polo.png", category: "KNITWEAR", title: "Knit Polo", desc: "Cable knit, horn buttons", price: "$350", fabric: "Cashmere", color: "#faecc3"},
    {id: 6, img: "/portfolio.png", category: "ACCESSORIES", title: "Leather Portfolio", desc: "Full-grain, brass fittings", price: "$280", fabric: "Leather", color: "#0e1c4f"},
    {id: 7, img: "/trousers.png", category: "SUITS", title: "Twill Trousers", desc: "Flat front, side adjusters", price: "$320", fabric: "Cotton", color: "#336659"},
    {id: 8, img: "/scarf.png", category: "ACCESSORIES", title: "Silk Scarf", desc: "Hand-rolled edges", price: "$185", fabric: "Silk", color: "#faecc3"}
  ];

  const showDetails = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container py-5 mt-5">
      <h1 className="section-title mb-4">The Collection</h1>
      <p className="text-center mb-5">Explore our curated selection of timeless pieces</p>
      
      {/* Filter */}
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search pieces..." />
            <select className="form-select">
              <option value="all">All Categories</option>
              <option value="suits">Suits & Blazers</option>
              <option value="dresses">Dresses</option>
              <option value="knitwear">Knitwear</option>
              <option value="accessories">Accessories</option>
            </select>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="row g-4">
        {items.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3">
            <div className="collection-item">
              <div className="collection-img-container">
                <img src={item.img} alt={item.title} className="collection-img" />
              </div>
              <div className="item-details">
                <div className="item-category">{item.category}</div>
                <h4 className="item-title">{item.title}</h4>
                <p className="item-description mb-2">{item.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="item-price">{item.price}</div>
                  <button className="btn btn-sm btn-outline" onClick={() => showDetails(item)}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedItem && (
        <div className="item-detail-overlay" style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 9999, padding: '20px'
        }} onClick={closeDetails}>
          <div className="item-detail-modal" style={{
            background: 'var(--cream)', borderRadius: '10px', maxWidth: '500px',
            width: '100%', maxHeight: '90vh', overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{
              background: selectedItem.color, color: 'white', padding: '1.5rem',
              borderRadius: '10px 10px 0 0', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center'
            }}>
              <h3 style={{margin: 0}}>{selectedItem.title}</h3>
              <button onClick={closeDetails} style={{
                background: 'none', border: 'none', color: 'white',
                fontSize: '1.5rem', cursor: 'pointer'
              }}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body" style={{padding: '1.5rem'}}>
              <div className="text-center mb-4">
                <img src={selectedItem.img} alt={selectedItem.title} style={{
                  maxWidth: '100%', maxHeight: '300px', borderRadius: '5px',
                  objectFit: 'contain', background: 'white', padding: '10px'
                }} />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <strong>Category:</strong>
                    <span className="badge">{selectedItem.category}</span>
                  </div>
                  <div className="mb-3">
                    <strong>Fabric:</strong>
                    <p>{selectedItem.fabric}</p>
                  </div>
                  <div className="mb-3">
                    <strong>Price:</strong>
                    <h4 style={{color: 'var(--taupe)'}}>{selectedItem.price}</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="color-display" style={{
                    width: '50px', height: '50px', backgroundColor: selectedItem.color,
                    borderRadius: '5px', marginBottom: '10px'
                  }}></div>
                  <p><strong>Description:</strong></p>
                  <p>{selectedItem.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary w-100" onClick={() => {
                  alert(`Customizing ${selectedItem.title}`);
                  closeDetails();
                }}>
                  <i className="fas fa-pencil-alt me-2"></i>Customize Similar Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collection;