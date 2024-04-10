// import modules

import express from 'express'

import {puppies} from "./data/puppies-data.js" 

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')



// mount Middleware (app.use)


// Mount routes

app.get('/', function(req, res) {
  res.send('<h1>Hello Express</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get("/puppies", function(req, res) {
  res.render("puppies/index", {
    puppies: puppies
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})