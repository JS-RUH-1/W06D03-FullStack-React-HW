import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect , useState} from "react"
// import { get } from '../../backend/routes/blogRoute';
function App() {
  let [posts,setPosts]=useState([])
  let [title ,setTitle]=useState()
  let [body ,setBody]=useState()
  
useEffect(()=>{
  axios
  .get("http://localhost:3001/posts/getPost")
  .then ((res) =>{
    console.log(res);
    setPosts(res.data);
  })
},[])
function add (){
  let obj = { title:title, body:body}
  axios.post("http://localhost:3001/posts/addpost",obj)
  .then((res)=>{
   setPosts(res.data)
  })
}
  return (
    <div className="App">
<input onChange={(e)=>{setTitle(e.target.value)}} type="text"/>
<input  onChange={(e)=>{setBody(e.target.value)}} type="text"/>
<button onClick={add}>add</button>
    {
      posts.map((e)=>{
return(
  <div>
    {e.id}
    {e.title}
    {e.body}
    {e.date}
  </div>
    ) })
    }
      
    </div>
  );
}

export default App;
