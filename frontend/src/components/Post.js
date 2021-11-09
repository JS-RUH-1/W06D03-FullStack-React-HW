import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [blog, setBlog] = useState([]);

  const addPost = (e) => {
    e.preventDefault();
    // console.log(e.target.form[0].value);

    axios
      .post("http://localhost:3000/addPost", {
        body: e.target.form[0].value,
        date: String(new Date()).slice(0, 15),
      })
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
        setPost(res.data);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      setBlog(res.data);
      console.log(blog);
    });
  }, [post]);

  return (
    <div>
      <form>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "center" }}>Create Post</h3>
          <input size={50} style={{margin:"10px" ,height: '3em'}} type="text" name="post" ></input>
          <button
            className="button"
            onClick={(e) => {
              addPost(e);
            }}
          >
            Post
          </button>
        </div>
        <br></br>

        {blog.map((p) => (
          <li>{p.body}</li>
        ))}
      </form>
    </div>
  );
};

export default Post;
