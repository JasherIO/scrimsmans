var express = require('express')
var router = express.Router()
var db = require('../db')

// GET list of teams
router.get('/', function(req, res, next) {
  db.query('select * from teams', (error, results) => {
    if (error) 
      return reject(error)
    
    res.send(results)
  })
})

// GET team
router.get('/:teamId', function(req, res, next) {
  // Validate params
  const teamId = req.params.teamId

  db.query(`select * from teams where id=${teamId}`, (error, results) => {
    if (error) 
      return reject(error)
    
    res.send(results)
  })
})

// GET matches for team
router.get('/:teamId/matches', function(req, res, next) {
  // Validate params
  const teamId = req.params.teamId

  db.query(`select * from matches where team1=${teamId} or team2=${teamId}`, (error, results) => {
    if (error) 
      return reject(error)
    
    res.send(results)
  })
})

// GET matches for team
router.get('/:teamId/players', function(req, res, next) {
  // Validate params
  const teamId = req.params.teamId

  db.query(`select * from players where team=${teamId}`, (error, results) => {
    if (error) 
      return reject(error)
    
    res.send(results)
  })
})

module.exports = router
