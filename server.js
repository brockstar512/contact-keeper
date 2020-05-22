const express = require('express')//importing llike this is called normal js
const connectDB = require('./config/db')
const app = express()

connectDB()

app.get('/', (req, res)=>
    res.json({ msg:'Welcome to the contact keeper api' }))

//define our routes
//we do that with app.us
//the routes are going use these root routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;
//this makes us look for an enviornment first


app.listen(PORT, () =>console.log(`Server started on port ${PORT}`))