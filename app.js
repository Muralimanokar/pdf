const express = require('express')
const app = express()
const path = require('path');
const bodyParser=require('body-parser')
const fs=require('fs')
var pdf = require('html-pdf');

const { urlencoded } = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//const pdfinvoice=require('./views')
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))
app.get('/', function(req,res)  {
res.render('index',{
    title:'articles',
    vehicleno:`${vehicleno}`
})
})
app.get('/getdata', function (req, res) {
  const today=new Date();
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.render('index', 
      JSON.parse(data));
    
  });
})
app.get('/getUSAdata', function (req, res) {
  fs.readFile('usadata.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.render('USA', JSON.parse(data));
  });
})
app.get('/getinvoicedata', function (req, res) {
  fs.readFile('invoicedata.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.render('invoice', JSON.parse(data));
  });
})

app.get('/addarticles', function(req,res)  {
    res.render('add_articles',{
        title:'ADD ARTICLE'
        
    })
    })
/*app.post('/data/post',express.urlencoded(), function(req, res, next) {
        console.log(req.body)
      res.render('index',{data:req.body})
      });
  */ 


//const port = process.env.PORT || 5000;
app.listen(3000, function() { console.log(`Listening on port 3000`)});
