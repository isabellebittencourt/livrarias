const mongoose = requere('mongoose');
const userSchema = require('./userSchema');
const bookSchema = require('./bookSchema');

var shoppingCart = new mongoose.Schema({
    quantidade:{
        type: Number,
        required:[true,'Obrigatório']
    },
    precoTotal:{
        type: Number,
        required:[true, 'Obrigatório']
    },
    usuario:[userSchema],
    livro:[bookSchema]
});

module.exports = mongoose.model('carrinho', shoppingCart);
