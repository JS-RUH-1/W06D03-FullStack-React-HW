import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect , useState} from "react"
// import { get } from '../../backend/routes/blogRoute'



function App() {
  
  let [posts,setPosts]=useState([])
    // HERE SHOULD EDIT THE USESTATYUS BECOUSE IT TAKE (TITLE ,LUNK, TECHS) NOT  ****
  let [title ,setTitle]=useState()
  let [link ,setLink]=useState()
  let [description, setDescription]=useState()
  let [technologiesUsed, setTechnologiesUsed]=useState()
  let [showForm,setShow]=useState(false)
  let [saveId,setId ]=useState()
  
useEffect(()=>{
  axios
  .get("http://localhost:3001/github/gethw")
  .then ((res) =>{
    console.log(res);
    setPosts(res.data);
  })
},[])
function add (){
  // HERE SHOULD EDIT THE OBJ BECOUSE IT TAKE (TITLE ,LUNK, TECHS) ****
  let obj = { title:title, link:link,technologiesUsed:technologiesUsed,description:description}
  axios.post("http://localhost:3001/github/addhw",obj)
  .then((res)=>{
   setPosts(res.data)
  })
}
function deletePost(id) {
  //     e.preventDefault()
      axios.delete(`http://localhost:3001/github/deletePost/${id}`)
  
         .then((res) => {
        console.log("what post do u have after delete: ", res.data)
        setPosts(res.data);
  
      });
    }
 function EditPost (e,id){
   e.preventDefault()
   setShow(true)
   setId(id)
   console.log(id)

 }

 function SaveEdit (e,id){
 e.preventDefault()
 let obj = { title:title, link:link,technologiesUsed:technologiesUsed,description:description}
 axios.put(`http://localhost:3001/github/${id}`,obj)
 .then((res)=>{
   setPosts(res.data);
 })
 }











  return (
    <div className="App">


      <header className="App-header">
<input placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} type="text"/>
<input placeholder="link" onChange={(e)=>{setLink(e.target.value)}} type="text"/>
<input placeholder="tech" onChange={(e)=>{setTechnologiesUsed(e.target.value)}} type="text"/>
<input placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} type="text"/>
{/* <input placeholder="Edit" onChange={(e)=>{set(e.target.value)}} type="text"/> */}
<button onClick={add}>Add</button>

    {
      posts.map((element)=>{
return(
  <div>
    {element.id}
    {element.title}
    {element.link}
    {element.technologiesUsed}
    {element.description}
    <button onClick={()=>{deletePost(element.id)}}>DELETE</button>
    <button onClick={(e)=>{EditPost(e,element.id)}}>EDIT</button>
  </div>
    ) })
    }
     {(function(){
       if (showForm==true){
         return(
           <form>
<input placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} type="text"/>
<input placeholder="link" onChange={(e)=>{setLink(e.target.value)}} type="text"/>
<input placeholder="tech" onChange={(e)=>{setTechnologiesUsed(e.target.value)}} type="text"/>
<input placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} type="text"/>
<button className="btn" onClick={(e)=>{
  SaveEdit(e,saveId)
}}>SAVE</button>
           </form>
         )
       }


     })()}
      
    </header></div>
  );
}

export default App;
