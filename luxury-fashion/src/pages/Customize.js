import React, { useState } from 'react';

function Customize() {
  const [formData, setFormData] = useState({
    garmentType: '',
    fabric: '',
    color: '',
    instructions: '',
    deliveryDate: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const colors = [
    { name: 'Cream', value: '#f3efe8' },
    { name: 'Taupe', value: '#bba591' },
    { name: 'Champagne', value: '#faecc3' },
    { name: 'Forest', value: '#336659' },
    { name: 'Navy', value: '#0e1c4f' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Custom order submitted successfully! Our artisans will contact you shortly.');
        setFormData({
          garmentType: '', fabric: '', color: '', instructions: '',
          deliveryDate: '', name: '', email: '', phone: '', address: ''
        });
      } else {
        alert('Failed to submit order. Please try again.');
      }
    } catch (error) {
      alert('Error submitting order: ' + error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container py-5 mt-5">
      <h1 className="section-title mb-4">Create Your Piece</h1>
      <p className="text-center mb-5">Design your custom garment with our artisans</p>

      <div className="row">
        {/* Customization Form */}
        <div className="col-lg-6 mb-4">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <h4 className="mb-3">Garment Details</h4>
            
            <div className="mb-3">
              <label className="form-label">Garment Type *</label>
              <select className="form-select" name="garmentType" value={formData.garmentType} onChange={handleChange} required>
                <option value="" disabled>Select type</option>
                <option value="blazer">Tailored Blazer</option>
                <option value="dress">Evening Dress</option>
                <option value="coat">Overcoat</option>
                <option value="trousers">Trousers</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Primary Fabric *</label>
              <div className="fabric-options">
                {['wool', 'cashmere', 'linen'].map((fabric) => (
                  <div className="form-check mb-2" key={fabric}>
                    <input className="form-check-input" type="radio" name="fabric" id={fabric} 
                      value={fabric} checked={formData.fabric === fabric} onChange={handleChange} required />
                    <label className="form-check-label" htmlFor={fabric}>
                      <span className={`fabric-sample ${fabric}`}></span>
                      {fabric === 'wool' ? 'British Wool' : fabric === 'cashmere' ? 'Scottish Cashmere' : 'Italian Linen'}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Color Selection *</label>
              <div className="color-palette">
                {colors.map((color) => (
                  <div key={color.value} className="color-option" style={{backgroundColor: color.value}}
                    onClick={() => setFormData({...formData, color: color.value})}>
                    {formData.color === color.value && <i className="fas fa-check"></i>}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Special Instructions</label>
              <textarea className="form-control" name="instructions" rows="3" 
                value={formData.instructions} onChange={handleChange}
                placeholder="Any specific measurements or details..."></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label">Desired Completion Date</label>
              <input type="date" className="form-control" name="deliveryDate" 
                value={formData.deliveryDate} onChange={handleChange} />
            </div>

            <h4 className="mb-3 mt-5">Contact Information</h4>
            
            <div className="mb-3">
              <label className="form-label">Full Name *</label>
              <input type="text" className="form-control" name="name" 
                value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address *</label>
              <input type="email" className="form-control" name="email" 
                value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" name="phone" 
                value={formData.phone} onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label className="form-label">Shipping Address</label>
              <textarea className="form-control" name="address" rows="2" 
                value={formData.address} onChange={handleChange}
                placeholder="Street address, city, postal code..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">Submit Custom Order</button>
          </form>
        </div>

        {/* Preview */}
        <div className="col-lg-6">
          <div className="preview-card">
            <h3 className="preview-title">Your Design Preview</h3>
            <div className="preview-area">
              {formData.garmentType ? (
                <div className="text-center">
                  <i className={`fas fa-${formData.garmentType === 'blazer' ? 'vest' : 
                    formData.garmentType === 'dress' ? 'female' : 
                    formData.garmentType === 'coat' ? 'coat' : 'user'} fa-7x`}
                    style={{color: formData.color || '#000'}}></i>
                  <h4 className="mt-3">{formData.garmentType.charAt(0).toUpperCase() + formData.garmentType.slice(1)}</h4>
                </div>
              ) : (
                <div className="preview-default">
                  <i className="fas fa-tshirt fa-5x"></i>
                  <p>Your custom piece will appear here</p>
                </div>
              )}
            </div>
            <div className="preview-details mt-3">
              <h5>Design Specifications</h5>
              <ul className="list-unstyled">
                {formData.garmentType && <li><strong>Type:</strong> {formData.garmentType}</li>}
                {formData.fabric && <li><strong>Fabric:</strong> {formData.fabric}</li>}
                {formData.color && <li><strong>Color:</strong> {colors.find(c => c.value === formData.color)?.name}</li>}
                {formData.deliveryDate && <li><strong>Target Date:</strong> {formData.deliveryDate}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;