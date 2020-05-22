const express = require('express')
const router = express.Router()

// @route   get  api/auth
//@description  get logged in user
//@access        private
router.get('/', (req, res)=>{
    res.send('Get logged in user')
})

router.get('/', (req, res)=>{
    res.send('log in user')
})



module.exports = router