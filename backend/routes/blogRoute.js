const express = require('express')
const router = express.Router()
router.use(express.json())

const posts =[
    {
        id: 1,
        title: "black coffee",
        body:"Black coffee is rich in antioxidants, which can fight cell damage and reduce your risk of serious health conditions like cancer and heart disease. Coffee is the primary source of antioxidants in most American diets.",
        date:"NOV 2021",
    },

    {
        id:2,
        title: "matcha latte",
        body:"When combined with a well-rounded diet and healthy lifestyle, drinking matcha may help keep your heart healthy and protect against disease. Studies show that green tea and matcha can decrease several heart disease risk factors.",
        date:"NOV 2021"
    },

    {
        id:3,
        title:"latte coffee",
        body:"Baristas craft the latte in a very different way. The layers of espresso and steamed milk are mixed together and topped with a light layer of foam. ",
        date:"NOV 2021"
    }

]

router.get('/posts/allPosts', function(req,res){
    console.log("posts");
    // console.log(posts);
    res.send(posts)
})

router.post('/posts/addPosts', function(req,res){
    console.log("posts add");

 let newPost = {
        id: posts.length+1,
        title: req.body.data.title,
        body: req.body.data.body,
        date: req.body.data.date
    }
    posts.push(newPost)
    console.log(posts)
    res.send(posts)
})

router.delete('/posts/deletePost/:id',function(req,res) {
    let found = posts.find(function (item){
        return item.id === parseInt(req.params.id)
    })
    if(found){
        let index = posts.indexOf(found)
        let theDeletedPost = posts.splice(index,1)
        res.send(theDeletedPost)
    }  else {res.sendStatus(404)} 
})

router.put('/posts/updatedPost/:id' , function (req, res){
    let found = posts.find(function(item){
        return item.id === parseInt (req.params.id)
    })
    if(found){
        let update ={
            id: found.id,
            title: req.body.data.title,
            body: req.body.data.body,
            date: req.body.data.date
        }
    }
})

module.exports = router