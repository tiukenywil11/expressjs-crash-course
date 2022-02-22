const express = require('express');
const app = express();

// Create an endpoint for the main page
app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>');
});

// Get port from environment variable, or on port 5000
const PORT = process.env.PORT || 5000;

// Listen takes 2 parameters, port and a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
