const mongoose = require('mongoose');

const shoppingCart = new mongoose.Schema({
    quantidade: {
        type: Number,
        required:[true,'quantidade Obrigatório.']
    },

    precoTotal: {
        type: Number,
        required:[true, '  precoTotalObrigatório.']
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuario',
        required: true
    },

    livros: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'livro',
        required: true
    }],
});

module.exports = mongoose.model('carrinho', shoppingCart);
