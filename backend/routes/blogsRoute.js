const express = require("express");
const router = express.Router();
router.use(express.json());

const blogs = [
  {
    id: 1,
    title: "First blog",
    body: "The first blog body.",
    date: new Date().getFullYear(),
  },
  {
    id: 2,
    title: "Second blog",
    body: "The second blog body.",
    date: new Date().getFullYear(),
  },
];
router.get("/allBlogs", (req, res) => {
  res.send(blogs);
});

router.post("/addBlog", (req, res) => {
  console.log(req.body.data.title);
  console.log("Blog Data: ", req.body.data.title);
  let newBlog = {
    id: blogs.length + 1,
    title: req.body.data.title.toString(),
    body: req.body.data.body.toString(),
    date: new Date().getFullYear(),
  };
  blogs.push(newBlog);
  res.json(blogs);
});

module.exports = router;
