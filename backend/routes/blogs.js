const express = require('express')
let router = express.Router()
const bl = require('../controllers/blCon')

router.get('/',bl.getBlog )
router.post('/',bl.postBlog )

module.exports =router;