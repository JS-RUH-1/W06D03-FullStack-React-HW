import { useState, useEffect } from "react";
import axios from "axios";
import './post.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts/allPosts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  },[]);

  ///// Add Post

  function addPost(e) {
    e.preventDefault();
    console.log(e.target.form[0].value)
    axios.post("http://localhost:3001/posts/addPost",{ data: { title:e.target.form[0].value ,body:e.target.form[1].value,date:e.target.form[2].value} }).then((res) => {
      console.log("what post do u have: ", res)
      setPosts(res.data);

    });
  }

   ///// Delete Post

  function deletePost(e,id) {
    e.preventDefault()
    axios.delete(`http://localhost:3001/posts/deletePost/${id}`).then((res) => {
      console.log("what post do u have after delete: ", res.data)
      setPosts(res.data);

    });
  }

  return (
    <>
      {console.log(posts)}
      <br/><h3>Add Posts:</h3><br/>
        <form>
            <input type="text" name="title" placeholder= "Title.."></input><br/>
            <input type="text" name="body" placeholder= "Body.."></input><br/>
            <input type="text" name="data" placeholder= "Data.."></input><br/>
            <br/><button onClick={(e) => {addPost(e)}}>ADD</button> <tr></tr><hr/>
            {posts.map((post) => (
            <li style={{ listStyleType: "none" }} ><h2 className = "post">{post.title}</h2><br/><h5 className = "post">{post.body}</h5><br/><p className = "post">{post.date}</p><br/><button onClick={(e) => {deletePost(e,post.id)}}>Delete</button><hr/></li>
            ))}
        </form>
    </>
  );
}
export default Posts;