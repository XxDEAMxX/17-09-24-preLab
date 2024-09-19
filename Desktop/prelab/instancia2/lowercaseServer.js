const express = require('express');
const app = express();
const port = 3002;

app.get('/random', (req, res) => {
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Genera una letra minúscula aleatoria
    res.json({ letter: randomLetter });
});

app.listen(port, () => {
    console.log(`Servidor de minúsculas corriendo en el puerto ${port}`);
});
