var mysql = require('mysql')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

connection.connect(function(err) {
  if (err) 
    throw err;
})

module.exports = connection