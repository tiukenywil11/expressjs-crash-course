const moment = require('moment');

// Create a middleware called logger, takes 3 parameters response, request, and next (call next last, to be able to call the next middleware)
const logger = (req, res, next) => {
    
    // console.log('Hello');

    // Get the url being accessed, and the date
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next();
}

module.exports = logger;