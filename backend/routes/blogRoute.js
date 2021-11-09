const  express  = require("express")
const router = express.Router()
router.use(express.json())

const post = [
    {
        id: 1, 
        title: "Flat White",
        body:"Coofee" + "Hot Milk",
        date:"02/11/2020",

    }
,
{
    id: 2, 
    title: "Espresso",
    body:"Pure Coofee",
    date:"02/02/2020",

}
,

{
    id: 3, 
    title: "Americano",
    body:"Coofee" + "Water",
    date:"02/14/2019",

}
]

router.get("/getPost", function(req,res){
    res.send(post)
})

router.post("/addpost", function(req,res){
req.body.data
// console.log("post data :" , req.body.data.title)
let date = new Date();
let NewPost ={
    id:post.length+1,
    title:req.body.title,
    body:req.body.body,
    date:date,
    
}
post.push(NewPost)
res.json(post)
})






module.exports = router
