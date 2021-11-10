const express = require("express")
const router = express.Router()
router.use(express.json())


const posts = 
[

    {
        id: 1,
        title: "Pizza",
        body: "Pizza is a dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. <br/> A small pizza is sometimes called a pizzetta.",
        date: '09/11/2021',

    },
    {
        id: 2,
        title: "Pasta",
        body: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
        date: '10/11/2021',

    }
    ,
    {
        id: 3,
        title: "Burger",
        body: "A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties usually ground meat,typically beef placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
        date: '11/11/2021',

    }

]

///// Get Post

    router.get('/allPosts', function(req, res) { 
  
        res.send(posts)
    })

///// Add Post

  router.post('/addPost', function(req, res) { 
  console.log(req.body)
  req.body.data
  console.log("Post data : ", req.body.data.title ,req.body.data.body ,req.body.data.date)

    let newPost ={
      id:posts.length+1,
      title:req.body.data.title,
      body:req.body.data.body,
      date:req.body.data.date
    }
    posts.push(newPost)
    res.json(posts)
    
  })

  ///// Edit Post

//   router.put('/editPost/:id',(req,res)=>{
//     let id = req.params.id
//     posts[id-1] = req.body

//     fs.writeFile("./post.json" , JSON.stringify(posts,null,'\t'),(error)=>
//     {
//         if (error) throw error;
//         res.send( posts[id-1])
//     })
// })

///// Delete Post
  
router.delete('/deletePost/:id',function(req, res){
    let found=posts.find(function(item){
      return item.id===parseInt(req.params.id)
    })
    if(found){
      let targetIndex =posts.indexOf(found)
      posts.splice(targetIndex,1)
      res.send(posts)
    }
    else{
      res.sendStatus(404)
    }
  })
  



module.exports = router;