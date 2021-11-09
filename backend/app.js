const express = require("express");
const app = express();
app.use(express.json());
const blogs = require("./blog.json");

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.post("/post", (req, res) => {
  const blog = {
    id: blogs.length + 1,
    // id: req.body.id,
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
  };
  blogs.push(blog);
  res.send(blogs);
});

app.use((req, res) => {
  console.log("Sorry! Can’t find that resource. Please check your URL");
  res.send("Sorry! Can’t find that resource. Please check your URL");
});

app.listen(5000, function () {
  console.log("blog express work");
  console.log(blogs);
});
