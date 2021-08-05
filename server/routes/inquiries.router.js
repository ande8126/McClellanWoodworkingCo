const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//routes go here
//POST for sending new inquiry data
router.post( '/', ( req, res )=>{
    console.log( 'in POST with:', req.body );
    queryText = 'INSERT INTO "inquiries" ("first_name", "last_name", "email", "phone", "description") VALUES ($1, $2, $3, $4, $5);';
    pool.query( queryText, [ req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.description ])
})

module.exports = router;