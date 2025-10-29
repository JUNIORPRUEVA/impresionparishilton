const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos (tu HTML, manifest, etc.)
app.use(express.static(__dirname));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Escuchar en el puerto que EasyPanel asigne
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor Mini Printer App activo en puerto ${PORT}`);
});

// Mantener vivo el proceso para que Easypanel lo detecte activo
setInterval(() => {
  console.log("💡 La aplicación Mini Printer sigue activa...");
}, 30000);
