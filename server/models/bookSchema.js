const mongoose = require('mongoose');

const categorySchema = require ('./categorySchema');

const book = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "Obrigatório ter título"]
    },

    autor: {
        type: String,
        required: [true, "Obrigatório."]
    },

    editora: {
        type: String,
        required: [true, "Obrigatório."]
    },

    edicao: {
        type: String,
        required: [true, "Obrigatório."]
    },

    anoPublicacao: {
        type: Date,
        requiered: [true, "Obrigatório."],
    },

    preco: {
        type: Number,
        required: [true, "Obrigatório."]
    },

    quantidade: {
        type:Number,
        required: [true, "Obrigatório."]
    },

    categoria: [categorySchema]
})

module.exports = mongoose.model('livro', book);