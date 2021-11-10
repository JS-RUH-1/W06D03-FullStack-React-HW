 import axios from 'axios';
 import { useState ,useEffect } from 'react';
 import './App.css';

function App() {

  const [post,setPost] = useState({id:'##',title:'',body:'', date:'2/2/2020'})

   
  const [addtitle,setTitle]= useState('')
  const [addbody,setBody]= useState('')
  const [adddate,setDate]= useState('') 


  const [posts,setPosts]= useState([])
   

/// get all data
//////////GET////////////////
  useEffect(()=>{

      axios.get('http://localhost:3001/posts')
     .then((res)=>{
      console.log(res.data)
      setPosts(res.data)

    })
  },[])

//////////POST ////////////////
  const handleClick=()=>{

    axios.post('http://localhost:3001/posts',{title:addtitle ,body:addbody,date:adddate})

    .then((res)=>{
      console.log(res.data)
      setPosts(res.data)
      setTitle('')
      setBody('')
      setDate('')
    })

  }
///////DELETE///////////////////
  const handelDelete =(id)=>{
       console.log(id)
     
       axios.delete(`http://localhost:3001/posts/${id}`)
      .then((res)=>{

        console.log(res.data)
        setPosts(res.data)
        
      })}

      //////////////PUT//////////////
      const handelUpdate=(id)=>{
        console.log(id)
        axios.put(`http://localhost:3001/posts/${id}`,{title:addtitle,body:addbody,date:adddate})
        .then((res)=>{
          setPosts(res.data)

        })

      }

  return (
     <>
  <div className='App'>

  <header className='App-header'>

    {posts.map((post)=>{
     <br/>
        return <li>

    ID:{post.id} title: {post.title} Body: {post.body} Date:{post.date} 
     <button onClick={()=>handelDelete(post.id)}>Delete</button>
     <button onClick={()=>handelUpdate(post.id)} >Updait</button><br/>
           
           
           
             </li> 
       
       })}




  <form>

  <input 
   type='text'
   placeholder='title' 
   value={addtitle}
   onChange ={ e=> setTitle(e.target.value)}></input><br/>

  <input 
  type='text' 
  placeholder='body'
  value= {addbody}
  onChange ={ e=> setBody(e.target.value)}></input><br/>

<input 
  type='text' 
  placeholder='date'
  value= {adddate}
  onChange ={ e=> setDate(e.target.value)}></input><br/>




  </form>
<br/>

   {/* <button onClick={handelBtn}>click me </button> */}

    <button onClick={handleClick}>POST</button><br/>
     
    
     

  </header>


   </div>
</>
  );
}

export default App;
