const express = require("express")
const app = express()
const blogRouter = require('./routes/blogRoute');
const hwRouter = require('./routes/hwRoute');
var cors = require('cors')
app.use(cors())
app.use(express.json())


app.use("/posts",blogRouter);
app.use("/hw",hwRouter);


const PORT = process.env.PORT || 3001
app.listen(PORT)