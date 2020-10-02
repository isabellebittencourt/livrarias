const mongoose = require('mongoose');

var categorie = new mongoose.Schema({
    categoria: {
        type: String,
        required: [true, "O campo é obrigatório"],
      },
});

module.exports = mongoose.model('categoria', categorie);
