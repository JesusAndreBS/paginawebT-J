const express = require("express");
const app = express();

// servir archivos estáticos
app.use(express.static("paginaweb"));

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});