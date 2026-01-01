const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  garmentType: String,
  fabric: String,
  color: String,
  instructions: String,
  deliveryDate: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);