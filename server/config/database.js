const mongoose = require ('mongoose');

const db = mongoose.connect('mongodb+srv://isabellebitten:andrade123@cluster0.te5ze.gcp.mongodb.net/livraria?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true,});

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