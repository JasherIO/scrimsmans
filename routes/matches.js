var express = require('express')
var validator = require('validator')

var router = express.Router()

var db = require('../db')

// GET list of matches
router.get('/', function(req, res, next) {
  db.query('select * from matches', (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

// GET match
router.get('/:id(\\d+)', function(req, res, next) {
  const id = req.params.id

  if (!validator.isInt(id))
    return next({ error: 'id must be an integer', status: 400 })

  db.query(`select * from matches where id=${id}`, (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

module.exports = router
