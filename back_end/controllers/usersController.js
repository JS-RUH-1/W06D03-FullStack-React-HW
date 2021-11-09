const users = require('../users')

exports.usersController = (req, res) => {
    res.send(`${JSON.stringify(users)}`)
    // res.json({
    //     usersList: ['user 1', 'user 2']
    // })
}