import { useState, useEffect } from "react";
import axios from "axios";

function Blogs(){
const [blogs , setBlogs]=useState([]);
const [addtitle, setAddtitle] = useState ('')
const [addbody, setAddbody] = useState ('')

useEffect (() =>{
axios.get('http://localhost:3001/getPosts')
.then((res)=>{
    console.log(res);
    setBlogs(res.data);
})
},[]);

function handlPost(){
    axios.post('http://localhost:3001/post' , {title:addtitle , body: addbody })
    .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
    })
}

return (
    <div>
        {
            blogs.map((item) =>{
                return (
                    <div>
                        <h5>{item.date}</h5>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        
                    </div>
                )

            })
        }
        
        <input onChange ={(e)=> setAddtitle(e.target.value)}
                         type="text" name="title"></input><br/>
                        <textarea onChange ={(e)=> setAddbody(e.target.value)}
                          name="title" rows="4" cols="50"></textarea>
                        <button onClick={handlPost}>Add</button>
                        
    </div>
)
}
export default Blogs;