const express = require("express")
const app = express()
const postRoute = require("./routes/postRoute")
app.use(express.json())




app.use("/posts", postRoute)



app.listen(3000, () => {console.log("server up to runnnig")})