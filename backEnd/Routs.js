const express = require('express');
// ???  
const router = express.Router();
// علشان نحل مشكله البودي
router.use(express.json())

// 
const posts = [
    {"id":1, "title":"First Title", "Body":"This my first Body","date":"2021-11-9"
    
    },
    {"id":2, "title":"2nd Title", "Body":"This my 2nd Body","date":"2021-11-3"
    
    }

]
// 

router.get('/getPosts',(req,res)=>{
        res.send(posts)
})

router.post('/addPosts',(req,res)=>{
    let newPost = {
     id:posts.length+1 ,
     title:req.body.data.title,
     Body:req.body.data.Body,
     date:new Date().toLocaleString()
    }

    posts.push(newPost)

    res.send(posts)


})



//



//EXport
module.exports=router