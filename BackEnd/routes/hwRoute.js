const express = require("express");
const router = express.Router();
const homeWork = require("../jsonFolder/homework.json")

router.use(express.json());


router.get("/gethomeWork", (req,res) => {
    res.send(homeWork)
})

router.post('/addHomeWork' , (req , res)=>{

    let newData ={
        id: homeWork.length +1 , 
        title: req.body.title ,
        link : req.body.link,
        technologiesUsed : req.body.technologiesUsed,
        description : req.body.description
    };

    homeWork.push(newData)
    res.json(homeWork)
})

router.put('/update/:id' , (req , res ) =>{
    let found = homeWork.find(function(item){
        return item.id === parseInt(req.params.id)
    })
    console.log(found)
    if (found){
        let Update ={
            id: found.id, 
            title: req.body.title ,
            link : req.body.link,
            technologiesUsed : req.body.technologiesUsed,
            description : req.body.description
        }

        let tregetIndex = homeWork.indexOf(found)
        homeWork.splice(tregetIndex , 1 ,Update )
        res.send(homeWork)
    }
    else {
        res.sendStatus(404)

    }

})

router.delete('/delete/:id' , (req , res )=>{

    let found = homeWork.find(function(item){
        return item.id === parseInt(req.params.id)

})
if (found){
    let tregetIndex = homeWork.indexOf(found)
    homeWork.splice(tregetIndex , 1)
    res.send(homeWork)
}
else {
    res.sendStatus(444);
}
})










module.exports = router