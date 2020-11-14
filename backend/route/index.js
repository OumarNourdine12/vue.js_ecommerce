const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";

var db = require('../db');



app.post('/SingUp', function (req, res) {
  console.log(req.body)

  bcrypt.genSalt(saltRounds, (err, salt) => {
    console.log(salt)

    bcrypt.hash(req.body.password, salt, (err, hash) => {

      var sql = `INSERT INTO users (nom, prenom, email, password, is_admin) VALUES ('${req.body.nom}','${req.body.prenom}','${req.body.email}','${hash}',0)`
      db.query(sql, function (err, result) {
        if (err) res.send(err)
        else res.send('top')

      });

    })
  })
});

app.post('/SignIn', function (req, res) {
  console.log('Bonjour')

  var sql = `SELECT * FROM users where email = "${req.body.email}"`
  db.query(sql, function (err, result){
    console.log(result)
    if (err) console.log(err)

    bcrypt.compare(req.body.password, result[0].password, function (err, response){
      console.log(response)

    })
  })

})

module.exports = app; 
