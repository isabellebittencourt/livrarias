const book = require('../models/bookSchema');

class bookController{
    //Cadastra um livro
    async cadastrar(req,res){
        var result = await  book.create(req.body);
        res.status(201).json(result);
    }

    //Busca o livro:
    async get(req, res){
        res.status(404).json(await book.find({}));
    }

    //buscar por Id
    async getById(req, res){
        var result = await book.findById(req.params.idbook);
        res.status(200).json(result);
    }
    //deletar um produto por id
    async deleteBook(req, res){
        var result = await book.findByIdAndRemove(req.params.idProdutoDelete);
        res.status(200).json(result);
    }
    //atualizar um produto por id
    async updateBook(req, res){
        var result = await book.findByIdAndUpdate(req.params.booktIdUp,req.body);
        res.status(200).json(result);
    }
}

module.exports = new bookController();