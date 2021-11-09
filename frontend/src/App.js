import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    async function getInfo () {
      try {
        const res = await axios.get("/posts")
        console.log(res.data);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getInfo()
  } ,[])


  async function addFunc () {
    let newItem = {
      title: title,
      desc: desc
    }
    try {
      const res = await axios.post("/posts/addPost", newItem)
      setPosts(posts.concat(newItem))
      setDisplay(false)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className="container">
        {posts.map((item, index) => {
          return (
            <div className="singlePost" key={index}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <p>{item.date}</p>
            </div>
          )
        })}
      </div>

      <div className="addSection" onClick={() => setDisplay(true)}>+</div>

      {display ? (
        <div className="formSection">
          <label>Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Description</label>
          <input 
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br /> 
          <input type="submit" value="Add Post" onClick={addFunc} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
