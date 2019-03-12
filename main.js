const express = require('express')
const app = express()
const port = 7000

app.get('/', function (req, res) {
    res.send('views/pages/index.html');
});


app.listen(port, () => console.log(`tax app listening on port: ${port}!`))
