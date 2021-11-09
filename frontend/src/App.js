import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  let [posts, setPosts] = useState([]);
  let [postTitle, setPostTitle] = useState("");
  let [postBody, setPoseBody] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handelAddPost() {
    const date = new Date();
    const postData = { title: postTitle, body: postBody, date: date };
    axios
      .post("http://localhost:3001/posts", postData)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Enter post's title"
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter post's body"
            onChange={(e) => setPoseBody(e.target.value)}
          />
          <button onClick={handelAddPost}> Add </button>
        </div>
        {/* ------------------------------------------ */}
        <div className="allPosts">
          {posts.map((e) => {
            let dateOfPost = new Date(e.date);
            dateOfPost =
              dateOfPost.getFullYear() +
              " / " +
              (dateOfPost.getMonth() + 1) +
              " / " +
              dateOfPost.getDate();
            // date.toLocaleDateString();
            return (
              <div key={e} className="post">
                <h3>
                  <span>{e.id}</span> {e.title}
                </h3>
                <hr />
                <p> {e.body}</p>
                <hr />

                <h6> {dateOfPost}</h6>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
