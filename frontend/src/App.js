import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    id: 0,
    title: "",
    body: "",
    date: "",
  });
  const [update, setUpdate] = useState({
    id: 0,
    title: "",
    body: "",
    date: "",
  });
  //const [inputValue,setInputValue] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        console.log("dataaaa", response.data);
        setPosts(response.data);
      })
      .catch((error) => {});
  }, [update]);
  
  function addnewPost() {
    //setPosts(posts)
    //console.log(newPost)
    const temp = {
      id: posts.length,
      title: newPost.title,
      body: newPost.body,
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
    console.log("inside add function",temp);

    axios
      .post("http://localhost:8080/", temp)
      .then(
        (response) => {
          console.log("success");
          //setPosts(response.data)
          setUpdate(temp);
        } //,(error)=>{console.log(error)}
      )
      .catch((error) => {
        console.log("err");
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="items">
          {posts.map((e, i) => {
            return (
              <div className="item" key={e.id}>
                <h2>{e.title}</h2>
                <h4>{e.body}</h4>
                <h6>{e.date}</h6>
              </div>
            );
          })}
        </div>
        <div id="form">
          <p>Post something</p>
          <input
            onChange={(e) =>
              setNewPost({
                id: newPost.id,
                title: e.target.value,
                body: newPost.body,
                date: "",
              })
            }
            placeholder="title"
          />
          <textarea
            onChange={(e) =>
              setNewPost({
                id: newPost.id,
                title: newPost.title,
                body: e.target.value,
                date: "",
              })
            }
            placeholder="content"
          />
          <button onClick={() => addnewPost()}>POST</button>
        </div>
      </header>
    </div>
  );
}

export default App;
