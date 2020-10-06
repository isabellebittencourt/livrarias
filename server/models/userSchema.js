const mongoose = require('mongoose');

var user = new mongoose.Schema({
    nome: {
        type: String,
        require: [true, "Obrigatório"]
    },

    cpf: {
        type: String,
        require: [true, "Obrigatório"]
    },

    email: {
        type: String,
        require: [true, "Obrigatório"]
    },

    dataNascimento: {
        type: Date,
        require: [true, "Obrigatório"]
    }
});

module.exports = mongoose.model('usuario', user);