const express = require("express")
const users = require('./users')
const app = express()
const cors = require("cors");
const fileHandler = require('file-system')

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())

// app.use('/users/', require('./routers/routes'))

app.get('/', function (req, res) {
    res.send(`${JSON.stringify(users)}`)
})

app.post('/', function (req, res) {
    let user = {
        name: req.body.name,
        id: Math.floor(Math.random() * 1000) + 1
    }
    users.push(user)
    fileHandler.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
        if (err) throw err;
        res.send(user)
    })
 })

app.put('/', function (req, res) {
    let obj = users.filter((user) => {
        return user.id === req.body.id
    })
    obj[0].name = req.body.name
    fileHandler.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
        if (err) throw err;
        res.send('done')
    })
 })

 app.delete('/', function (req, res) {
    let obj = users.filter((user) => {
        return user.id === req.body.id
    })
    const index = users.indexOf(obj[0])
    users.splice(index,1)
    fileHandler.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
        if (err) throw err;
        res.send('done')
    })
 })

app.listen(5000, () => {
	console.log("Server has started!")
})