var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var helmet = require('helmet')

var router = require('./routes/index')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use(router)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
