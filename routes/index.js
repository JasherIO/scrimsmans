var express = require('express')
var router = express.Router()
var teamsRouter = require('./teams')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello, world!')
})

router.use('/teams', teamsRouter)

module.exports = router
