const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    const fruits = {
        name: 'apple',
        price:120,
    }
    res.send(fruits);
    // res.send('Welcome To Node and i am from mongo')
})

app.listen(3200, console.log('Server Start'))