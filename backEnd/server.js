const express =require('express');
const cors=require('cors');
const  posts =require('./posts.json');
const app=express();
const PORT =3001;
const fs=require('fs')


 

app.use(cors({origin:'http://localhost:3001'}))

app.use(express.json());



app.get('/posts',(req,res)=>{
    // console.log(posts)
    res.json(posts);
})

//POST
app.post('/posts',(req,res)=>{

    const newPost= {
        id:  posts.length + 1,
        title:req.body.title,
        body:req.body.body,
        date:req.body.date
    }
     posts.push(newPost)
    console.log(req.body)
    
    fs.writeFile('./posts.json',JSON.stringify(posts,null,2),(err)=>{
        if(err) throw err;
    })

    res.json(posts)  
})


//DELETE

app.delete("/posts/:id",(req,res)=>{

    console.log("id from back"+req.params.id)

const found = posts.find((item)=>{
    return item.id === parseInt(req.params.id)
})

if(found){
    const targetIndex = posts.indexOf(found)
    posts.splice(targetIndex,1)
    // res.send(posts)
}
else{
    app.sendStatus(404)
}
fs.writeFile('./posts.json',JSON.stringify(posts,null,2),(err)=>{

    console.log(posts)
    if(err) throw err;
    res.send(posts)
})
})

// PUT----> Update

app.put('/posts/:id',(req,res)=>{

    const found = posts.find((item)=>{

        return item.id === parseInt(req.params.id)
    })

    if (found){
        const update ={

            id:found.id,
            title:req.body.title,
            body:req.body.body,
            date:req.body.date
        }

        const targetIndex = posts.indexOf(found)
        posts.splice(targetIndex,1,update)
        res.send(posts)


    }
    else{
        app.sendStatus(404)
    }
})








app.listen(PORT,()=>{
    console.log('connected on= http://localhost:3001/posts')
})