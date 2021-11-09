import "./App.css";
import { useState, useEffect } from "react";
// import MyNavbar from "./components/MyNavbar";
// <MyNavbar />
import { Button } from "react-bootstrap";
import Axios from "axios";

function App() {
  let [blogs, setblogs] = useState([]);
  let [newBlog, setnewBlog] = useState({});

  useEffect(() => {
    Axios.get("blogs/allBlogs").then((res) => {
      console.log(res.data);
      setblogs(res.data);
    });
  }, []);

  function hundleAdd(e) {
    e.preventDefault();

    newBlog = {
      title: e.target.form[0].value,
      body: e.target.form[1].value,
    };
    console.log(newBlog);

    Axios.post("blogs/addBlog", { data: newBlog }).then((res) => {
      console.log("res" + res);
      setblogs([...blogs, newBlog]);
    });
  }
  return (
    <>
      <div className="App">
        {blogs.map((e) => {
          return (
            <>
              <h2>Title: {e.title}</h2>
              <h6>id: {e.id}</h6>
              <p>Body: {e.body}</p>
              <p>Date: {e.date}</p>
            </>
          );
        })}
      </div>

      <div className="App">
        <h2 className="mt-5">Wlcome to home page</h2>
        <form>
          <label htmlFor="title">Write title</label>
          <br />
          <input type="text" id="title" />
          <br />
          <br />
          <label htmlFor="body">Write body</label>
          <br />
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
          <br />
          <Button
            variant="outline-primary"
            onClick={(e) => {
              hundleAdd(e);
            }}
          >
            Add Blog
          </Button>
        </form>
      </div>
    </>
  );
}

export default App;
