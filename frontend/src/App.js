import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import { CreatePost } from "./components/CreatePost";
axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post {...post} />
      ))}

      <CreatePost addPost={(post) => setPosts([...posts, post])} />
    </div>
  );
}

export default App;
