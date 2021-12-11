const express = require("express");
const cors = require("cors");
const app = express();
const {arr}  = require("./data.js");

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.json(arr);
});

app.post("/", (req, res) => {
  let newData = req.body;
  console.log(newData)
  newData.id= arr.length+1;
  arr.push(newData)
  res.send(arr);
});

app.listen(3001);