var express = require('express')
var router = express.Router()
var matchesRouter = require('./matches')
var playersRouter = require('./players')
var teamsRouter = require('./teams')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello, world!')
})

router.use('/matches', matchesRouter)
router.use('/players', playersRouter)
router.use('/teams', teamsRouter)

module.exports = router
