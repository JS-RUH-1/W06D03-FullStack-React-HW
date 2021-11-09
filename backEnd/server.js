const express =require('express');
const cors=require('cors');
const {posts}=require('./posts.js');
const app=express();
const PORT =3001;

let currentId = posts.length;

app.use(cors({origin:'http://localhost:3001'}))
app.use(express.json());

app.get('/posts',(req,res)=>{
    console.log(posts)
    res.json(posts);
})

app.post('/posts',(req,res)=>{
    const post =req.body;
    post.id = ++currentId;
    posts.push(post);
    res.json(post);
})

app.listen(PORT,()=>{
    console.log('connected on= http://localhost:3001/posts')
})