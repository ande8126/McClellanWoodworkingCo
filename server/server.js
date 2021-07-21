//server setup with express
const express = require('express');
const bodyParser = require('body-parser');
//no dotenv yet since no third-party apis

const app = express();

//routers
/* stil need to plan out back-end
and think about what exactly needs to connect back to the 
database */
const jobsRouter = require('./routes/jobs.router');
const clientsRouter = require('./routes/clients.router');

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//using the routers
app.use( '/api/jobs', jobsRouter );
app.use( '/api/clients', clientsRouter );

//serve static files
app.use(express.static('build'));

//assign server to PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, ()=>{
    console.log(`live on port: ${PORT}`);
})


