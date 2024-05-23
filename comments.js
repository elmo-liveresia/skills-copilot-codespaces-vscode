// Create web server
// This file is responsible for setting up the web server and routing requests to the appropriate handlers
// It listens for incoming HTTP requests on port 3000
// It uses the router module to determine the appropriate handler for each request
// It uses the comments module to store comments in memory
// It uses the handler module to handle the requests
// It uses the http module to create the web server
// It uses the url module to parse the URL of incoming requests

// Require the http module to create the web server
const http = require('http');
// Require the url module to parse the URL of incoming requests
const url = require('url');
// Require the router module to determine the appropriate handler for each request
const router = require('./router');
// Require the comments module to store comments in memory
const comments = require('./comments');
// Require the handler module to handle the requests
const handler = require('./handler');

// Create the web server
const server = http.createServer((req, res) => {
  // Parse the URL of the incoming request
  const parsedUrl = url.parse(req.url, true);
  // Route the request to the appropriate handler
  router.route(req.method, parsedUrl.pathname, handler.handle, comments, req, res);
});

// Listen for incoming HTTP requests on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});