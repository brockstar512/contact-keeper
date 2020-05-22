const express = require('express')
const router = express.Router()
const User = require('../models/User')
// @route   post  api/users
//@description  register a user
//@access  public
router.post('/', 
[
    check('name', 'please add name').not().isEmpty(),
    check('email', 'Pleas include a valid email').isEmail(),
    check('password',"Please enter a password with 6 or more characters").isLength({min:6})
],
(req, res)=>{
    res.send(req.body)
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
})


module.exports = router