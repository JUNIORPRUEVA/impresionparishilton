const express = require("express");
const path = require("path");
const app = express();

// Forzar HTTPS en EasyPanel si es proxy inverso
app.enable("trust proxy");
app.use((req, res, next) => {
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

// Servir archivos estáticos (HTML, manifest, service worker, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puerto asignado automáticamente por EasyPanel
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Mini Printer App activa en puerto ${PORT}`);
});

// Mantener vivo
setInterval(() => {
  console.log("💡 Manteniendo viva la aplicación...");
}, 30000);
