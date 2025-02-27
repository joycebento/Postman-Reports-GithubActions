const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.use(jsonServer.rewriter(routes));

// Add authorization middleware
server.use((req, res, next) => {
  // Check if the request is for a protected route
  if (req.path.includes('/cart')) {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || authHeader !== 'Bearer tester-token-123') {
      return res.status(401).json({ error: 'Unauthorized - Valid authentication token required' });
    }
  }
  next();
});

// Use default router
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`API is available at http://localhost:${PORT}/api`);
});
