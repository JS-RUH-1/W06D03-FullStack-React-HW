const express = require("express");
const cors = require("cors");
const app = express();
const {arr}  = require("./data.js");

app.use(cors())
app.use(express.json());

//Note: i used proxy in package.json in React.js   
// "proxy": "http://localhost:3000",
// in this hw you just have to use it in the front-end 
// if it a real project and it will be  production you will have to include it in your backend

//GET
app.get("/", (req, res) => {
  // .json work as JSON.Stringfly 
  res.json(arr);
});

//POST - this post don't write/read so it will not be saved 
app.post("/", (req, res) => {
// from the front-end we are sending {title , description , date }
// it will be stored in newData
  let newData = req.body;
  console.log(newData)
  newData.id= arr.length+1;
  arr.push(newData)
  res.send(arr);
});

app.listen(3001);