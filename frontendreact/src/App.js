import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  // const [blog, setBlog] = useState([])


//for homework

const [titles, setTitles] = useState('')
const [description, setDescription] = useState('')
const [links, setLinks] = useState('')
const [showForm, setShowForm] = useState(false)
const [editId, setEditId] = useState('')
const [homework, setHomework] = useState([])

//for blogs
  // useEffect(()=>{
  //   axios.get('http://localhost:3001/blogs')
  //   .then((res) => {
  //     console.log(res.data)
  //     setBlog(res.data)
  //   })
  // }, [])

  //for homework
  useEffect(()=>{
    axios.get('http://localhost:3001/homeWork')
    .then((res) => {
      console.log(res.data)
      setHomework(res.data)
    })
  }, [])
//for blogs
  // const handleClick = () => {
  //   axios.post('http://localhost:3001/blogs', {title: title,body: body})
  //   .then((res) => {
  //     console.log(res.data)
  //     setBlog([...blog, res.data])
  //   })
  // }

  //for homeworks

  const handlesClick = () => {
    axios.post('http://localhost:3001/homeWork', {title: titles,description:description,link:links})
    .then((res) => {
      console.log(res.data)
      setHomework(res.data)
    })
  }
  const removed =(id)=>{ 
    axios.delete(`http://localhost:3001/homeWork/delete/${id}`)
    .then((res) => {
      console.log(res.data)
      setHomework(res.data)
    })
  }
  //put 
function enableIdet(id) {
  setShowForm(true)
  setEditId(id)
}

  //
function editPost(e,id){
e.preventDefault();
let title=e.target.form[0].value;
let link=e.target.form[1].value;
let description = e.target.form[2].value;
axios.put(`http://localhost:3001/homeWork/edit/${id}`, {title:title,link:link,description:description})
.then((res) => {
  console.log(res.data)
  setHomework(res.data)
  })
}
  // useEffect(()=>{
  //   console.log(users)  
  // }, [users])
  return (
    <div className="App">
    <h1>Blog</h1>
      <header className="App-header">
{/* 
      {
        blog.map((user ,index)=>{
          return(
            <li key={index}>Title: {user.title} body:{user.body}</li> 
          
            ) 
           
        })
        
      } */}
      <div className="homework">
      {
        homework.map((homework ,index)=>{
          return(
            <div>
            <p>Welcome To My Blog</p>
            <li key={index}>Title: {homework.title} description:{homework.description} Links: {homework.link}</li> 
            <button onClick={()=>{removed(homework.id)}}>Delete</button>
            <button onClick={()=>{enableIdet(homework.id)}}>Edite</button>
            
            </div>
          )
        })}

      {/* <input onChange={((e)=>{setTitle(e.target.value)})}></input> */}
      {/* <input onChange={((e)=>{setBody(e.target.value)})}></input>
      <button onClick={handleClick}>POST</button> */}
      </div>
        
      <hr/>
      {/* for homework */}
      <input className="inp" onChange={((e)=>{setTitles(e.target.value)})} placeholder="title"></input>
      <input className="inp"  onChange={((e)=>{setDescription(e.target.value)})} placeholder="link"></input>
      <input className="inp"  onChange={((e)=>{setLinks(e.target.value)})} placeholder="description"></input><br/>
      <button className="put"  onClick={handlesClick}>Post</button>

      </header>

     {(function() {
       console.log(showForm)
       if(showForm==true) {
         return(
           <form>
           <input  className="inp"   type="text" placeholder="title"></input>    
           <input  className="inp"   type="text" placeholder="link"></input>  
           <input  className="inp"   type="text" placeholder="description"></input>      
           <button className="put" onClick={(e)=>{editPost(e,editId)}}>save</button>
           </form>
         )
       }
     })()}
    </div>
  );
}

export default App;
