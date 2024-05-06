require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req,res) => {
    res.send('<h1>Login here!<h1>')
})

app.get('/medium', (req,res) => {
    res.send('<h1>Blog here</h1>')
})

app.get('/Coffee', (req,res) => {
    res.send('<h2> Lets Have some Coffee!')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
