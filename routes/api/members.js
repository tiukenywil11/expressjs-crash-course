const express = require('express');
const uuid = require('uuid');
// Gets the Router function from express framework, to use on api functions
const router = express.Router();
const members = require('../../Members');

// Create a RESTful API endpoint to get a full array
// Remove /api/members from url path, because it is already called on app.js
router.get('/', (req, res) => {
    
    // Parses members from javascript object to json format
    res.json(members);

})

// Create a RESTful API endpoint to get a single element
// Remove /api/members from url path, because it is already called on app.js
router.get('/:id', (req, res) => {

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

// Create a RESTful API endpoint to post (create) a new element
router.post('/', (req, res) => {
    //res.send(req.body);

    // Put request return into a variable
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // Sends eror message when name or email fields are blank
    if(!newMember.name || !newMember.email) {
        res.status(400).json({ msg: 'Please include a name and email' });
    }
    
    // Push new member to members array
    members.push(newMember);
    // Returns a json formatted array of new array
    res.json(members);

});


module.exports = router;