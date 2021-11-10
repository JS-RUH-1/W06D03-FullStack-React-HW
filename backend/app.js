const express = require('express');


const app = express();
app.use(express.json());
var cors = require('cors')

app.use(cors())
var morgan = require('morgan');

app.use(morgan('dev'));
const PORT = 8000;

// Import Routes

let blog = require('./routes/blog')

// Use Routes

app.use ( '/blog', blog )

app.get('/', (request,response) => {
    response.send ("Home page")
})


app.listen ( PORT, (errorCallback) => {
    errorCallback 
    ? console.error( errorCallback )
    : console.log ( `Server Started http://localhost:${PORT}` )
})