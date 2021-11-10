const express = require("express")
const app = express()
const blogRouter = require('./routes/blogRoute');
var cors = require('cors')

app.use(cors())


app.use("/posts",blogRouter);


const PORT = process.env.PORT || 3001
app.listen(PORT)