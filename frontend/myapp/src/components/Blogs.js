import {useState , useEffect} from 'react'
import axios from 'axios'

function Blogs() {

//  const [A , setA] = useState([A])
 const [blogs , setBlogs] = useState([])
 const [blog , setBlog] = useState({title:"", description:"",link:"",techUsed:""})
 const [title2 , setTitle] = useState("")
 const [body2 , setBody] = useState("")
 const [date2 , setDate] = useState("")
    useEffect(()=>{
        console.log("hello from useEffect");

        axios.get('http://localhost:3001/posts/posts/allPosts')
        .then((res)=>{
            console.log(res.data);
            setBlogs(res.data)
        })
    }, [])

    function addPost(e){
        setBlog({title:title2 , body:body2 , date:date2})
       e.preventDefault()
       console.log(blog)
        axios.post('http://localhost:3001/posts/posts/addPosts', {data:{title:title2 , body:body2 , date:date2 }})
        .then((res)=>{
            setBlogs(res.data)
         console.log("the new post:",res);
        })
    }

    function deletePost(e,id){
        e.preventDefault()
        axios.delete(``)
        .then((res)=>{
            console.log("deleted post", res.data);
            setBlogs(res.data)
        })
    }

    return ( 
        <div>
        <form> 
            <input placeholder="post title" onChange={(e) => setTitle(e.target.value)}></input>
            <input placeholder="post body" onChange={(e) =>  setBody(e.target.value)}></input>
            <input placeholder="post date" onChange={(e) => setDate(e.target.value)}></input>
            <button onClick={(e)=>{addPost(e)}}>ADD</button>
        </form>
        {blogs.map((e)=>{
            return(
                <div>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
            <p>{e.date}</p>
            </div>
            )
        })}
        </div>
     );
}

export default Blogs;