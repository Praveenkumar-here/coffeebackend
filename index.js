require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
//const port = 4000
const path = require('path')

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
//app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/forms.html'))
})

app.get('/medium', (req,res) => {
    res.send('<h1>Blog here!!!!!!!!!!!!!!</h1>')
})

app.get("/d", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/Coffee', (req,res) => {
    res.send('<h2> Lets Have some Coffee!')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})