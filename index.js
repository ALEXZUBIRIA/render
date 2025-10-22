const express = require('express');
const app = express();
// Render te asignará un puerto dinámicamente a través de la variable de entorno PORT
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desplegado en Render!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});