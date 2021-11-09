const express = require("express");
const app = express();
const blogs = require("./blog.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.post("/post", (req, res) => {
  req.body.data;
  const blog = {
    id: blogs.length + 1,
    title: req.body.data.title,
    body: req.body.data.body,
    date: req.body.data.date,
  };
  blogs.push(blog);
  res.send(blogs);
});

app.use((req, res) => {
  console.log("Sorry! Can’t find that resource. Please check your URL");
  res.send("Sorry! Can’t find that resource. Please check your URL");
});

app.listen(3001, function () {
  console.log("blog express work");
  console.log(blogs);
});
