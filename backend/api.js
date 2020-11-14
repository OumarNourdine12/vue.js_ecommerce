const express = require('express')
const app = express()
const routes = require('./route')

// var db = require('./db');
// app.get('/db', function(req,res){
//     res.send('thomas/alban')

// })

app.use(routes)



app.listen(3000);


