const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.listen(3000, () => {
    console.log('Servidor funcionando')
})