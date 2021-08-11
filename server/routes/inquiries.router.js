const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//routes go here
//POST for sending new inquiry data
router.post( '/', ( req, res )=>{
    console.log( 'in inquiries POST with:', req.body );
    queryText = 'INSERT INTO "inquiries" ("first_name", "last_name", "email", "phone", "description") VALUES ($1, $2, $3, $4, $5);';
    pool.query( queryText, [ req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.description ]).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err ) =>{
        console.log( 'error in inquiry POST:', err );
        res.sendStatus( 500 );
    })
})
//GET call for bringing down new inquiries
router.get( '/', ( req, res )=>{
    console.log( 'in inquiries GET' );
    queryText = 'SELECT * FROM "inquiries" ORDER BY "date" DESC;';
    pool.query( queryText ).then( ( results )=>{
        res.send( results.rows );
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        res.sendStatus( 500 );
    })
})

module.exports = router;