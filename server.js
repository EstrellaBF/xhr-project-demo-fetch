const express = require('express');
const app = express();
// Cambiando el valor del puerto para evitar conflicto
const server = app.listen(3001, turnOn);

function turnOn() {
 console.log('Servidor encendido');
}

app.use(express.static('public'));