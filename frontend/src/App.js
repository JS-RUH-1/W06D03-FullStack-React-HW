import logo from './logo.svg';
import './App.css';
import React,{useState , useEffect } from 'react';
import axios from 'axios'

function App() {
  const [posts,setPost] = useState([])


  
 useEffect(()=>{
  
  axios.get('/main/getPosts')
  .then((res)=>{
    setPost(res.data)
    console.log(posts);
    
  })

 
 },[])

 function tran (e){
  e.preventDefault()
  console.log(e.target.form[1].value);
  axios.post('/main/addPosts',{data:{title:e.target.form[0].value,Body:e.target.form[1].value}})
  .then((res)=>{
     setPost(res.data)
    console.log(res);
  })
}

  return (
    <div className="App">

      <div id='posts'>

      {posts.map((e)=>{
        console.log(e);
        return(
          <div>
            <h1>{e.title}</h1>
            <h4>{e.Body}</h4>
            <h6>{e.date}</h6>

          </div>
        )
      })}


      <form>

      <input type='text' placeholder='title'></input>
      <input type='text' placeholder='body'></input>
      <button onClick={((e)=>{tran(e)})}>Add Post</button>

      </form>

      </div>
      
    </div>
  );
}

export default App;
