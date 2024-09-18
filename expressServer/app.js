const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const PORT = 8000;
const app = express();
const IP_ADDRESS = "localhost";

app.use(express.json()); 
app.use(cors());

app.get('/get', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Servidor escuchando en http://${IP_ADDRESS}:${PORT}`);
});

const logStream = fs.createWriteStream('server.log', { flags: 'a' });
app.use((req, res, next) => {
  const logMessage = `${req.method} ${req.url} - ${new Date().toLocaleString()}\n`;
  logStream.write(logMessage);
  next();
});



