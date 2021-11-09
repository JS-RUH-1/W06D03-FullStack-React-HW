const express = require("express");
const cors = require("cors");
const blogs = require("./blogs.json");
const fs = require("fs");
const app = express();
const port = 3003;

app.use(cors({origin:'http://localhost:3003'}))
app.use(express.json());

//-----get------
app.get("/blogs", (req, res) => {
    console.log(blogs);
    res.json(blogs);
  });

  //------post -----
  app.post("/blogs", (req, res) => {
  
    let newBlog = {
      id: blogs.length + 1,
      title: req.body.title,
      body: req.body.body,
      date: "2021",
    };
    blogs.push(newBlog);
    fs.writeFile("./blogs.json", JSON.stringify(blogs), (err) => {
      if (err) throw err;
    });
    res.json(blogs);
  });
  //-----Listen-----
  app.listen(port, () => {
    console.log("connected on= http://localhost:3003/blogs");
  });