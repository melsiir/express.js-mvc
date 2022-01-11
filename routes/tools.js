const path = require('path')
const express = require('express')
const router = express.Router()


router.get('/password(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,'views', 'tools', 'password.html'))
})

router.get('/array', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views', 'tools', 'array.html'))
})


module.exports = router