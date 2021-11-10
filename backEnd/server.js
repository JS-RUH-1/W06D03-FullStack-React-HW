const express = require('express');
const app = express();
const data = require('./Routs')
// 
const cors = require('cors')

app.use(cors())

//
app.use('/main',data)

//


const PORT = process.env.PORT ||3001;
app.listen(PORT,()=>{
    console.log('Done');
})
