const express = require('express')
const router = express.Router()

// @route   get  api/contacts
//@description  get  all users contacts
//@access  private

router.get('/', (req, res)=>{
    res.send('get  contact')
})


router.post('/', (req, res)=>{
    res.send('get add contact')
})



router.put('/:id', (req, res)=>{
    res.send('get all contacts')
})


// @route   delete  api/contacts
//@description  delete a contact
//@access  private
router.delete('/:id', (req, res)=>{
    res.send('contact is deleted')
})



module.exports = router