const express = require('express')
const app = express()
const blogRoute = require("./routes/blogRoute")
const hmRoute = require("./routes/hwRoute")

//  عشان بارتين مختلفة 3000 & 3001
var cors = require('cors')
app.use(cors())
// الباث نفس الباث اللي في القيت
app.use("/blog" ,  blogRoute); 
app.use("/homeWork", hmRoute)

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("done"));