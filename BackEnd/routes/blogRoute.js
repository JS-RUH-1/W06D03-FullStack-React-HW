const express = require("express");
const router = express.Router();
const blog = require('../jsonFolder/blog.json')
router.use(express.json());



router.get('/showBlog' , function(req , res ){    
   res.send(blog)
})

router.post('/addBlog' , (req , res)=>{

    let newPost ={
        id: blog.length +1 , 
        title: req.body.title ,
        body : req.body.body,
        date : req.body.date
    };

    blog.push(newPost)
    res.json(blog)
})


// router.delete('/:id', (req , res ) =>{

//     let found = blog.find(function(item){
//         return item.id === parseInt(req.params.id)
//     })

//     if(found){
//         let dul = blog.indexOf(found)
//         blog.splice(dul , 1)
//         res.send(blog)
//     }else {
//         res.sendStatus(404)
//     }


// } )





module.exports = router;