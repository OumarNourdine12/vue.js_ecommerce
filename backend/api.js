const express = require('express')
const app = express()

var db = require('./db');
app.get('/db', function(req,res){
    res.send('thomas/alban')

})





app.listen(3000);


