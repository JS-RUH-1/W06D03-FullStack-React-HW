const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const cors = require('cors')
app.use(cors())


app.get("/post", (req, res) => {
  fs.readFile("blog.json", "utf8", (err, data) => {
    res.send(data);
  });
});

app.post("/addPost", (req, res) => {
  fs.readFile("blog.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);

    let newPost = {
      id: arr.length + 1,
      title: req.body.title || "post"+(arr.length+1),
      body: req.body.body,
      date: req.body.date,
    };
    arr.push(newPost);

    fs.writeFile("blog.json", JSON.stringify(arr), (err) => {
      res.json(arr);
    });
  });
});

app.listen(3000);
