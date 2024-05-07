require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
<<<<<<< HEAD
//const port = 4000
const path = require('path')

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
//app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))

=======
const port = 4000
>>>>>>> 82ab5614f53fefb35db3b155b71b2923eb552494

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req,res) => {
    res.send('<h1>Login here!<h1>')
})

app.get('/medium', (req,res) => {
<<<<<<< HEAD
    res.send('<h1>Blog here!!!!!!!!!!!!!!</h1>')
=======
    res.send('<h1>Blog Will come up here!</h1>')
>>>>>>> 82ab5614f53fefb35db3b155b71b2923eb552494
})

app.get("/d", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/Coffee', (req,res) => {
    res.send('<h2> Lets Have some Coffee!')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
