const mongoose = require('mongoose');

const category = new mongoose.Schema({
    nome: {
      type: String,
      required: [true, "O campo é obrigatório."],
    }
});

module.exports = mongoose.model('categoria', category);
