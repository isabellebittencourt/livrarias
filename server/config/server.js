const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const routes = require ('./routes.js');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

const port = 1234;

app.listen(1234, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});