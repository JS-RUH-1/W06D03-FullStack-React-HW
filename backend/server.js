const express = require('express')
const app = express()
const blogRouter = require('./routes/blogRoute')
const githubRouter = require('./routes/githubRoute')
const cors = require('cors')

app.use(cors())
app.use('/posts',blogRouter)


app.use('/github',githubRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT,console.log("running"))