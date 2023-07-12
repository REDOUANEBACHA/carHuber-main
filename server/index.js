const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

require("./router/user")(app);

app.use((err, req, res, next) => {
  console.error(err);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Acces-Control-Allow-Headers", "Authorization");
  res.status(500).json({ error: 'Une erreur est survenue sur le serveur.' });
  next();
});

app.listen(1000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 1000');
});
