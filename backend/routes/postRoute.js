const express = require("express")
const router = express.Router()
router.use(express.json())


const postsItems = [
    {
        id: 1,
        title: "First Title",
        desc: "First desc",
        date: "2021/09/10 12:04:15 PM"
    },
    {
        id: 2,
        title: "Second Title",
        desc: "Second desc",
        date: "2021/09/10 12:04:15 PM"
    },
    {
        id: 3,
        title: "Third Title",
        desc: "Third desc",
        date: "2021/09/10 12:04:15 PM"
    }
]


router.get("/" , (req,res) => {
    res.send(postsItems)
})

router.post("/addPost", (req,res) => {
    let newPost = {
        id: postsItems.length + 1,
        title: req.body.title,
        desc: req.body.desc,
        date: new Date().toLocaleString()
    }

    postsItems.push(newPost)
    res.send(postsItems)

    
})

module.exports = router