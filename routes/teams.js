var express = require('express')
var validator = require('validator')

var router = express.Router()

var db = require('../db')

// GET list of teams
router.get('/', function(req, res, next) {
  db.query('select * from teams', (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

// GET team
router.get('/:id(\\d+)', function(req, res, next) {
  const id = req.params.id

  if (!validator.isInt(id))
    return next({ error: 'id must be an integer', status: 400 })

  db.query(`select * from teams where id=${id}`, (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

// GET matches for team
router.get('/:id(\\d+)/matches', function(req, res, next) {
  const id = req.params.id

  if (!validator.isInt(id))
    return next({ error: 'id must be an integer', status: 400 })

  db.query(`select * from matches where team1=${id} or team2=${id}`, (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

// GET players for team
router.get('/:id(\\d+)/players', function(req, res, next) {
  const id = req.params.id

  if (!validator.isInt(id))
    return next({ error: 'id must be an integer', status: 400 })

  db.query(`select * from players where team=${id}`, (error, results) => {
    if (error) 
      return next(error)
    
    res.send(results)
  })
})

module.exports = router
