const  express  = require("express")
const router = express.Router()
router.use(express.json())
const hw = require ("./github.json")


router.get("/gethw", function(req,res){
    res.send(hw)
})

router.post("/addhw", function(req,res){
    // console.log("post data :" , req.body.data.title)
  
    let NewHw ={
        id:hw.length+1,
        title:req.body.title,
        link:req.body.link,
        technologiesUsed:req.body.technologiesUsed,
        description:req.body.description,
    }    



    hw.push(NewHw)
    res.json(hw)
})

router.delete('/deletePost/:id',function(req, res){
    console.log("deleeete")
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

    router.put("/:id",function(req,res){
        let found= hw.find(function(item){
            return item.id===parseInt(req.params.id)
        })
        if (found){
            let update = {
                id:found.id,
                title: req.body.title,
                link: req.body.link,
                technologiesUsed: req.body.technologiesUsed,
                description: req.body.description
            }
            let targetIndex= hw.indexOf(found)
            hw.splice(targetIndex, 1 , update)
            res.send(hw)
        }else{
            res.sendStatus(404)
        }

    } )







module.exports= router

