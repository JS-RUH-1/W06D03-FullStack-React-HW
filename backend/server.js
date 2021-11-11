const express = require("express")
const app = express()
const blogRouter = require("./routes/blogRoute")
const cors = require("cors")
const hw = require("./routes/hwRoute")

app.use(cors({origin:"http://localhost:3000"}));

// console.log(post)
// app.get("/getPost", function(req,res){
//     res.send(post)
// })
app.use("/posts",blogRouter)

app.use("/github",hw)


const PORT = process.env.PORT || 3001
app.listen(PORT) 