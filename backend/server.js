const express = require("express")
const app = express()
const blogRouter = require("./routes/blogRoute")
const cors = require("cors")

// console.log(post)
// app.get("/getPost", function(req,res){
//     res.send(post)
// })
app.use("/posts",blogRouter)


app.use(cors({origin:"http://localhost:3000"}));

const PORT = process.env.PORT || 3001
app.listen(PORT) 