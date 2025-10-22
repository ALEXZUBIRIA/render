const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Actividad 2.3. Ephemeral enviroments');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
