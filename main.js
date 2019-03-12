const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tax-calculation', function(req, res){
  // res.render('tax_calculation.html');
  // res.sendFile('tax_calculation.html');
  res.sendFile(path.join(__dirname+'/views/pages/tax_calculation.html'));
});

app.listen(port, () => console.log(`tax app listening on port: ${port}!`))