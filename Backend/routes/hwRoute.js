const express = require("express")
const fs = require("fs");
const router = express.Router()
router.use(express.json())


const hw = 
[

    {
        id: 1,
        title: "HW-Github",
        link: "https://github.com/NouraAlQarni" ,
        technologiesUsed: 'Github and Terminal',

    },
    {
        id: 2,
        title: "HTML-HW",
        link: "https://github.com/NouraAlQarni/W01D02-HW-HTML",
        technologiesUsed: 'HTML',

    },
    {
        id: 3,
        title: "CSS-HW",
        link: "https://github.com/NouraAlQarni/W01D03-Lab-Box-Model",
        technologiesUsed: 'HTML and CSS',

    },
    {
        id: 4,
        title: "Resposive-HW",
        link: "https://github.com/JS-RUH-1/W01D04-Lab-responsive",
        technologiesUsed: 'HTML,CSS',

    },
    {
        id: 5,
        title: "Online-Store",
        link: "https://github.com/NouraAlQarni/weppage",
        technologiesUsed: 'HTML and CSS',

    },
    {
        id: 6,
        title: "Arrays, Conditions and Loops",
        link: "https://github.com/NouraAlQarni/W02D01-HW-Array-Conditions-",
        technologiesUsed: 'HTML,CSS and JS',

    },
    {
        id: 7,
        title: "Functions & DOM	JS-OOP",
        link: "https://github.com/NouraAlQarni/W02D02-Lab-JS3-function",
        technologiesUsed: 'HTML,CSS and JS',

    },
    {
        id: 8,
        title: "Online-Store2",
        link: "https://github.com/NouraAlQarni/weppage",
        technologiesUsed: 'HTML,CSS and JS',

    },
    {
        id: 9,
        title: "Advanced JS	",
        link: "https://github.com/NouraAlQarni/W04D01-AdvancedJS-HW",
        technologiesUsed: 'HTML,CSS and JS',

    },
    {
        id: 10,
        title: "React component	",
        link: "https://github.com/NouraAlQarni/W04D02HW",
        technologiesUsed: 'HTML,CSS,JS and React',

    },
    {
        id: 11,
        title: "React- useState, useEffect, axios	",
        link: "https://github.com/NouraAlQarni/W04D04HW",
        technologiesUsed: 'HTML,CSS,JS,React and API',

    },
    {
        id: 12,
        title: "React-social media" ,
        link: "https://github.com/NouraAlQarni/W04D05HW",
        technologiesUsed: 'HTML,CSS,JS,React and API',

    },
    {
        id: 13,
        title: "React-Router and useContex",
        link: "https://github.com/NouraAlQarni/W05D01HW",
        technologiesUsed: 'HTML,CSS,JS,React and API',

    },
    {
        id: 14,
        title: "YouTube API",
        link: "https://github.com/NouraAlQarni/W05D03-MiniProject",
        technologiesUsed: 'HTML,CSS,JS,React,API and Redux',

    }

]


///// Get HW

router.get('/allHw', function(req, res) { 
  
    res.send(hw)
})

///// Add HW

router.post('/addHw', function(req, res) { 
// console.log(req.body)
// console.log("Post data : ", req.body.data.title ,req.body.data.link ,req.body.data.technologiesUsed)

let newHw ={
  id:hw.length+1,
  title:req.body.title,
  link:req.body.link,
  technologiesUsed:req.body.technologiesUsed
}
hw.push(newHw)
res.json(hw)

})

///// Edit HW

  router.put('/editHw/:id',(req,res)=>{
    let found=hw.find(function(item){
        return item.id===parseInt(req.params.id)})

        if(found){
                let editHw ={
                id:hw.length+1,
                title:req.body.title,
                link:req.body.link,
                technologiesUsed:req.body.technologiesUsed
                }
                let targetIndex =hw.indexOf(found)
                hw.splice(targetIndex,1,editHw)
                res.json(hw)
                }
  
})

///// Delete HW

router.delete('/deleteHw/:id',function(req, res){
let found=hw.find(function(item){
  return item.id===parseInt(req.params.id)
})
if(found){
  let targetIndex =hw.indexOf(found)
  hw.splice(targetIndex,1)
  res.send(hw)
}
else{
  res.sendStatus(404)
}
})




module.exports = router;