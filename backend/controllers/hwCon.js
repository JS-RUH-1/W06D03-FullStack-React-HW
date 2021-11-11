const users = require('../homwork')
const fs = require('fs')

exports.getBlog=(req, res) =>{
    res.send(users);
    console.log('homework')
}
   
exports.postBlog=(req, res) =>{  
   const user1 ={
       title: req.body.title,
       link: req.body.link,
       description: req.body.description,
       id:users.length +1
   }
   users.push(user1); 
    res.send(users);
 }
exports.deletetHomework=(req, res) => { 
// app.delete('/', function (req, res) {
  console.log(req.params.id)
const homeWorkfound = users.filter((homeWork)=>{ 
    return homeWork.id == req.params.id
})
console.log(homeWorkfound)

const index = users.indexOf(homeWorkfound[0])
users.splice(index, 1)
fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
      if (err) throw err;
      res.send(users)
    })
  }
    
 // app.put('/', function (req, res) {
  exports.putHomework=(req, res) => { 
    console.log(req.params.id)
        const homeWork = users.filter((homeWork)=>{ 
          return homeWork.id == req.params.id
        })
        console.log(homeWork)
        homeWork[0].title = req.body.title
        homeWork[0].link = req.body.link
        homeWork[0].description = req.body.description
    
        fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
            if (err) throw err;
            res.send(users)
          })
        }