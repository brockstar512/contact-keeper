const express = require('express')
const router = express.Router()

// @route   post  api/users
//@description  register a user
//@access  public
router.post('/', (req, res)=>{
    res.send('Register a user')
})


module.exports = router