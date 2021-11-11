const express = require('express')
let router = express.Router()
const hw = require('../controllers/hwCon')

router.get('/',hw.getBlog )
router.post('/',hw.postBlog )
router.put('/edit/:id',hw.putHomework )
router.delete('/delete/:id',hw.deletetHomework)


module.exports =router;