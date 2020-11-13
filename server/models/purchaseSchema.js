const mongoose = require('mongoose');

const purchase = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuario'
    },

    itens: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'livro',
        required: true
    }],

    total: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('compra', purchase);