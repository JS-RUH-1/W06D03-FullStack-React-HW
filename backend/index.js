const express = require("express");
const cors = require("cors");
const app = express();
const {arr}  = require("./data.js");

app.use(cors())
app.use(express.json());

//GET
app.get("/", (req, res) => {
  res.json(arr);
});

//POST
app.post("/", (req, res) => {
  
  let newData = req.body;
  console.log(newData)
  newData.id= arr.length+1;
  arr.push(newData)
  res.send(arr);
});


//PUT

// app.put("/:id", (req, res) => {
//   let index = jsonObj.findIndex((game) => game.id === parseInt(req.params.id));
//   // if the user enter wrong id
//   if (index == -1) return res.send("The id is not exsist");
//   //else
//   let newName = req.body.name;
//   jsonObj[index].name = newName;
 
//   res.send(jsonObj);
// });
//DELETE
// app.delete("/:id", (req, res) => {
//   let index = jsonObj.findIndex((game) => game.id === parseInt(req.params.id));
//   // if the user enter wrong id
//   if (index == -1) return res.send("The id is not exsist");
//   //else
//   jsonObj.splice(index, 1);

//   res.send(jsonObj);
// });
app.listen(3001);