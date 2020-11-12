const mongoose = require('mongoose');

const purchase = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuario',
        required: true
    },

    itens: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'livro',
        required: true
    }]
})

module.exports = mongoose.model('compra', purchase);