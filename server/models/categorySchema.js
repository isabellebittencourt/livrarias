const mongoose = require('mongoose');

const category = new mongoose.Schema({
    categoria: {
        type: String,
        required: [true, "O campo é obrigatório."],
      }
});

module.exports = category;
