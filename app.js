const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = 3002;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

const port = process.env.port || puerto;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


