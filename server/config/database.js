require('dotenv').config();

const mongoose = require ('mongoose');

const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log("Conexão com o banco realizada com sucesso!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Conexão com o banco falhou!. \n${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectamos com o banco de dados!");
});

module.exports = db;