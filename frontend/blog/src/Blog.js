import axios from "axios";
import { useState, useEffect } from "react";

function Blog() {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/blogs").then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  function add(e) {
    e.preventDefault();
    console.log(e);
    let title = e.target[0].value;
    let body = e.target[1].value;
    let date = e.target[2].value;

    axios
      .post("/post", {
        data: { title: title, body: body, date: date },
      })
      .then((res) => {
        console.log("add suc" + res);
        setBlogs(res.data);
      });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          add(e);
        }}
      >
        <input placeholder="title"></input>
        <br></br>
        <input placeholder="body"></input>
        <br></br>
        <input placeholder="date"></input>
        <br></br>
        <button type="submit"> Add blog </button>
      </form>

      {blog.map((item) => {
        return (
          <div>
            <h6>
              id: {item.id} date:{item.data}
            </h6>
            <h4>Title: {item.title}</h4>
            <p>Blog: {item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
