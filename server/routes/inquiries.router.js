const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//routes go here
//POST for sending new inquiry data
router.post( '/', ( req, res )=>{
    console.log( 'in POST with:', req.body );
})

module.exports = router;