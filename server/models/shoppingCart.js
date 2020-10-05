const mongoose = require('mongoose');

var shoppingCart = new mongoose.Schema({
    quantidade:{
        type: Number,
        required:[true,'quantidade Obrigatório.']
    },
    precoTotal:{
        type: Number,
        required:[true, '  precoTotalObrigatório.']
    },
    userId:
    {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userSchema',
    required: true
},
    booktId:
       [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'bookSchema',
        required: true
    }],
});

module.exports = mongoose.model('carrinho', shoppingCart);
