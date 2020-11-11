const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



var db = require('../db');



app.post('/SingUp', function ( req, res){

  var sql =  `INSERT INTO users (nom, prenom, email, password, is_admin) VALUES ('${req.body.nom}','${req.body.prenom}','${req.body.email}','${req.body.password}',0)`
  db.query(sql, function (err, result){
    if(err) res.send(err)
    else res.send('top')
  })
});
app.post('./SignIn', function(req, res){
  
})

module.exports = app; 
