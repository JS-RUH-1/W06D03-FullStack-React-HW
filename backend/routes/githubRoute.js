const express = require('express')
const router = express.Router()
router.use(express.json())

const github =[
    {
        id: 1,
        title:"Homework1",
        description:"des1",
        link:"link1",
        techUsed:"tech1",
    },

    {
        id:2,
        title:"Homework2",
        description:"des2",
        link:"link2",
        techUsed:"tech2",
    },

    {
        id:3,
        title:"Homework3",
        description:"des3",
        link:"link3",
        techUsed:"tech3",
    },

    {
        id:4,
        title:"Homework4",
        description:"des4",
        link:"link4",
        techUsed:"tech4",
    },
    {
        id:5,
        title:"Homework5",
        description:"des5",
        link:"link5",
        techUsed:"tech5",
    }

]

router.get('/HW', function(req,res){
    res.send(github)
})

router.post('/addHW', function(req,res){
    let newHW = {
        id: github.length+1,
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        techUsed: req.body.techUsed,
    }
    github.push(newHW)
    res.send(github)
})

router.delete('/delete/:id',function(req,res) {
    let found = github.find(function (item){
        return item.id === parseInt(req.params.id)
    })
    // console.log(found)
    if(found){
        let index = github.indexOf(found)
        github.splice(index,1)
        res.send(github)
    }  else {res.sendStatus(404)} 
})

router.put('/update/:id', function (req, res){
    let found = github.find(function(item){
        return item.id === parseInt (req.params.id)
    })
    if(found){
        let update ={
            id: found.id,
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            techUsed: req.body.techUsed,
            
        }
        let tID = github.indexOf(found)  
        github.splice(tID , 1, update)
        res.send(github)
    }
})

module.exports = router