//Use middleware
const express = require("express")
const passport = require("passport")
const morgan = require("morgan")
const bodyParser = require('body-parser')
const winston = require('winston')

const db = require('./db')
const app = express()

const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Init session
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'rainbow cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//Use morgan logging
app.use(morgan())
app.use(express.static('public'))
app.use(express.static('dictionary'))
app.use('/vendor', express.static('vendor'))
app.use('/scripts', express.static('scripts'))
app.use('/style', express.static('views/style'))

//Routing
require("./config/route")(app, passport, db)
require("./config/passport")(passport, db)

/*db.query('SELECT id, username, password, type FROM users WHERE username=$1', ['tchanhtinh'], (err, result) => {
    console.log(result)
})*/

app.listen(process.env, (req, res) => {
    console.log("Server open at " + process.env)
})
