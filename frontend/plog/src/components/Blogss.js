import axios from 'axios';
import { useState, useEffect } from 'react';


function Blogss(){

const [addt, setAddt] = useState ('')
const [addb, setAddb] = useState ('')

const [blog, setBlog] = useState([])


useEffect(()=> {
    axios.get('http://localhost:8080/blogs')
    .then((res) => {
        console.log(res.data);
        setBlog(res.data);
    })
    
}, []);

function handlePost() {
    axios.post('http://localhost:8080/blogs', {title: addt, body: addb })
    .then((res) => {
        console.log(res.data);
        setBlog([...blog,res.data]);
    })
}

useEffect(()=> {
    console.log(blog);
    
}, [blog]);

    return(
       <div>
           {
               blog.map((item) => {
                   return (
                       <div>
                       <h6>id:{item.id} date:{item.date}</h6>
                        <h4>title:{item.title}</h4>
                        <p>blog:{item.body}</p>
                        </div>
                   )
               })
           }

        <input onChange={(e)=> setAddt(e.target.value)}  ></input>
           <input onChange={(e)=> setAddb(e.target.value)}  ></input>
           <button onClick={handlePost} >blog</button>
       </div>
    )


}

export default Blogss