const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const products = [
  {
    id: 1,
    name: "Cashmere Overcoat",
    category: "COATS",
    fabricType: "Scottish Cashmere",
    price: 1250,
    description: "Double-breasted, wool lining",
    inStock: true,
    imageUrl: "/images/coat.jpg"
  },
  {
    id: 2,
    name: "Wool Suit",
    category: "SUITS",
    fabricType: "British Wool",
    price: 950,
    description: "Timeless tailoring for every occasion",
    inStock: true,
    imageUrl: "/images/suit.jpg"
  },
  {
    id: 3,
    name: "Silk Dress",
    category: "DRESSES",
    fabricType: "Italian Silk",
    price: 850,
    description: "Elegance in every stitch and seam",
    inStock: true,
    imageUrl: "/images/dress.jpg"
  }
];

const orders = [
  {
    orderId: "ORD-001",
    customerName: "John Smith",
    customerEmail: "john@example.com",
    garmentType: "SUIT",
    primaryFabric: "British Wool",
    status: "PENDING",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    orderId: "ORD-002",
    customerName: "Emma Wilson",
    customerEmail: "emma@example.com",
    garmentType: "COAT",
    primaryFabric: "Scottish Cashmere",
    status: "IN_PROGRESS",
    createdAt: "2024-01-16T14:45:00Z"
  }
];

// ========== API ROUTES ==========

// 1. Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Montclair Luxury Fashion API',
    version: '1.0.0',
    status: 'operational',
    timestamp: new Date().toISOString()
  });
});

// 2. Get all products
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// 3. Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (product) {
    res.json({
      success: true,
      data: product
    });
  } else {
    res.status(404).json({
      success: false,
      error: 'Product not found',
      message: `No product found with ID: ${req.params.id}`
    });
  }
});

// 4. Get all orders
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    count: orders.length,
    data: orders
  });
});

// 5. Create new order
app.post('/api/orders', (req, res) => {
  const newOrder = {
    orderId: `ORD-${Date.now()}`,
    ...req.body,
    status: 'PENDING',
    createdAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  
  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    data: newOrder
  });
});

// 6. Admin orders (requires auth header)
app.get('/api/admin/orders', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || authHeader !== 'Bearer admin-token-123') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Valid admin token required'
    });
  }
  
  res.json({
    success: true,
    count: orders.length,
    data: orders
  });
});

// 7. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'montclair-api',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 8. Error demo route
app.get('/api/error-demo', (req, res) => {
  res.status(400).json({
    success: false,
    error: 'VALIDATION_ERROR',
    message: 'Required fields are missing',
    details: {
      missingFields: ['customerEmail', 'garmentType'],
      code: 'ERR_400'
    }
  });
});

// 9. Create sample data
app.post('/api/sample-data', (req, res) => {
  // Add more sample products if needed
  res.json({
    success: true,
    message: 'Sample data available',
    productCount: products.length,
    orderCount: orders.length
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
  console.log('\n📋 Available endpoints:');
  console.log(`  🔗 Home:        http://localhost:${PORT}/`);
  console.log(`  🛍️  Products:    http://localhost:${PORT}/api/products`);
  console.log(`  📦 Orders:      http://localhost:${PORT}/api/orders`);
  console.log(`  🏥 Health:      http://localhost:${PORT}/api/health`);
  console.log(`  ❌ Error demo:  http://localhost:${PORT}/api/error-demo`);
  console.log(`  🔑 Admin orders: http://localhost:${PORT}/api/admin/orders`);
  console.log('\n📝 POST to /api/orders to create new order');
});