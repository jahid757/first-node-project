const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome To Node')
})

app.listen(3200)