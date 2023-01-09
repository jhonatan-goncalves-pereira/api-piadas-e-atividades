const express = require('express')
const app = express()
const path = require('path')
const PORT = '8080'

app.use(express.static(__dirname + '/src'))

app.get('/', function(req, res) {
    res.send("Este é o app do Grupo 4 🐊")
})

app.get('/api/piadas', function(req, res) {
    res.send("API Chuck Norris")
})

app.get('/api/atividades', function(req, res) {
    res.send("API Atividades")
})

app.listen(PORT, function(){
    console.log(`Ouvindo a porta ${PORT}`);
})