const express = require('express')
const app = express()
const blogs = require('./blog.json')

const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json())


app.get('/blogs', (req,res) =>{
    console.log(res)

    res.send(JSON.stringify(blogs))
})


app.post('/blogs', (req, res) =>{
    console.log(req.body)
    let bolg ={
        id: blogs.length +1, 
        title: req.body.title,
        body: req.body.body,
        date: req.body.date
    }
    blogs.push(bolg)
    res.send(bolg)
})
// ------------------------------------------

// app.put('/blogs', (req, res) =>{
//     let bolg = blogs.find((bolg)=>{
//         return(
//             bolg.id == req.body.id
//         )
//     })
//     console.log(bolg)
//     bolg.title=req.body.title
//     bolg.body=req.body.body,
//     bolg.date=req.body.date
//     res.send(blogs)

//    fs.writeFile("bolg.json", `${JSON.stringify(blogs)}`,(err)=>{
//      if(err) throw err;
//      res.send(bolg)
//  })
//  })
// app.put('/blogs', (req, res) {
//     let bolg = blogs.find(function(item){
//         return item.id === parseInt(req.params.id)
//     })
//     if (bolg){
//         let newblog = {
//             id: bolg.id,
//             title: req.body.title
//         }
//     }
// })
// -------------------------------------------

app.delete('/blogs', (req, res) =>{
    console.log(req.body.id)
    
    let bolg = blogs.filter((bolg)=>{

        return  bolg.id == req.body.id
        
    })
    console.log(bolg)
    const index = blogs.indexOf(bolg[0])
    blogs.splice(index, 1)
    // res.send(bolg)
      res.send(blogs)

//     fs.writeFile("bolg.json", `${JSON.stringify(blogs)}`,(err)=>{
//      if(err) throw err;
//      res.send(blogs)
//  })
 })


app.listen(5000, () => {
    console.log('ready')

})