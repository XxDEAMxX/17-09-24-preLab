const express = require('express');
const app = express();
const port = 3001;

app.get('/random', (req, res) => {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Genera una letra mayúscula aleatoria
    res.json({ letter: randomLetter });
});

app.listen(port, () => {
    console.log(`Servidor de mayúsculas corriendo en el puerto ${port}`);
});
