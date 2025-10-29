// server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indice.html'));
});

// Escuchar en el puerto 3000 y en todas las interfaces
app.listen(3000, '0.0.0.0', () => {
  console.log('🚀 Servidor Mini Printer App activo en puerto 3000');
});
