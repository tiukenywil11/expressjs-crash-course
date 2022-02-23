const express = require('express');
// path is a dependency of node, which gets device's path
const path = require('path');
const members = require('./Members');

const app = express();

// Create a middleware called logger, takes 3 parameters response, request, and next (call next last, to be able to call the next middleware)
const logger = (req, res, next) => {
    
    // console.log('Hello');

    // Get the url being accessed
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

// Initialize middleware, everytime a request is ran, the middleware runs as well
app.use(logger);

/*
-- This was commented out, and replaced by static directory
-- Create an endpoint for the main page
app.get('/', (req, res) => {
    -- res.send('<h1> Hello World </h1>');

    -- Using sendFile uses an entire html file, instead of code snippets from
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

// Create a RESTful API endpoint
app.get('/api/members', (req, res) => {
    
    // Parses members from javascript object to json format
    res.json(members);

})

// Set a static folder, set 'public' as default directory used
app.use(express.static(path.join(__dirname, 'public')));

// Get port from environment variable, or on port 5000
const PORT = process.env.PORT || 5000;

// Listen takes 2 parameters, port and a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
