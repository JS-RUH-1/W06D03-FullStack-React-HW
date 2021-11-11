const users = require('../Users')
const fs = require('fs')

exports.getBlog=(req, res) =>{
    res.send(users);
    console.log('blogs')
}
   
exports.postBlog=(req, res) =>{  
   const user1 ={
       title: req.body.title,
       body: req.body.body,
       id:users.length +1
   }
   users.push(user1);
   fs.writeFile('Users.json', `${JSON.stringify(users)}`, (err) => {
    if (err) throw err;
    res.send(user1)
  })
}