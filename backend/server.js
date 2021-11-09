const express = require("express");
const posts = require("./posts.json");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  let post = req.body;
  console.log(post);
  posts.push({
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
  });
  fs.writeFile("./posts.json", JSON.stringify(posts), (err) => {
    if (err) throw err;
  });
  res.json(posts);
});

app.listen(port, console.log("server is listening"));
