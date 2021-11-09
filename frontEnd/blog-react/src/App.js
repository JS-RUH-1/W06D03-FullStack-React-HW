 import axios from 'axios';
 import { useState ,useEffect } from 'react';
 
import './App.css';

function App() {

  const [post,setPost] =useState({title:'Shahad'})
  const [posts,setPosts]= useState([])
 

  useEffect(()=>{

    axios.get('http://localhost:3001/posts')
    .then((res)=>{
      console.log(res.data)
      setPosts(res.data)

    })
  },[])


  const handleClick=()=>{
    axios.post('http://localhost:3001/posts',post)
    .then((res)=>{
      console.log(res.data)
      setPosts([...posts,res.data])
    })
  }
  return (
     <>
<div className='App'>
  <header className='App-header'>

    {
      posts.map((post)=>{
        return <li>ID :{post.id} title: {post.title} Body: {post.body}</li>
      })
    }

    <button onClick={handleClick}>POST</button>

  </header>


</div>

     </>
  );
}

export default App;
