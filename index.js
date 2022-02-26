const express = require('express');
// path is a dependency of node, which gets device's path
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

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

/*
This was transferred to routes/api/members.js
-- Create a RESTful API endpoint to get a full array
app.get('/api/members', (req, res) => {
    
    // Parses members from javascript object to json format
    res.json(members);

})

-- Create a RESTful API endpoint to get a single element
app.get('/api/members/:id', (req, res) => {

    // Sends a request to get values based in id (req.params = returns for a string format)
    // res.send(req.params.id);

    // The higher order array some returns true or false based on te condition provided 
    const found = members.some(member => 
        member.id === parseInt(req.params.id) 
    )

    if(found) {
        // Parses members from javascript object to json format
        res.json(members.filter(member => 
            member.id === parseInt(req.params.id)
        ));
    } else {
        res.status(400).json(
            { msg: `No member with th id of ${req.params.id}`}
        )
    }
})
*/

// Set a static folder, set 'public' as default directory used
app.use(express.static(path.join(__dirname, 'public')));

// Call api, assigning url /api/members to the file from /routes/api/members
app.use('/api/members', require('./routes/api/members'))

// Get port from environment variable, or on port 5000
const PORT = process.env.PORT || 5000;

// Listen takes 2 parameters, port and a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
