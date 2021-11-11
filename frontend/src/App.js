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










  return (
    <div className="App">
<input placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} type="text"/>
<input placeholder="link" onChange={(e)=>{setLink(e.target.value)}} type="text"/>
<input placeholder="tech" onChange={(e)=>{setTechnologiesUsed(e.target.value)}} type="text"/>
<input placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} type="text"/>
<input placeholder="Edit" onChange={(e)=>{set(e.target.value)}} type="text"/>
<button onClick={add}>Add</button>

    {
      posts.map((e)=>{
return(
  <div>
    {e.id}
    {e.title}
    {e.link}
    {e.technologiesUsed}
    {e.description}
    <button onClick={()=>{deletePost(e.id)}}>Delet</button>
  </div>
    ) })
    }
      
    </div>
  );
}

export default App;
