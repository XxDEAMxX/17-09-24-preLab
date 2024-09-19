const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas las solicitudes

// Middleware para elegir aleatoriamente entre mayúsculas o minúsculas
app.use((req, res, next) => {
    const servers = ['http://localhost:3001/random', 'http://localhost:3002/random'];
    const randomServer = servers[Math.floor(Math.random() * servers.length)];
    
    // Hacemos la petición a uno de los dos servidores
    axios.get(randomServer)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        res.status(500).send('Error al obtener la letra');
    });
});

app.listen(port, () => {
    console.log(`Servidor principal corriendo en el puerto ${port}`);
});