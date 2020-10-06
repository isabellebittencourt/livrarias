const book = require('../models/bookSchema');

class bookController {
    async add(request, response) {
        const {
            titulo,
            autor,
            editora,
            edicao,
            anoPublicacao,
            preco,
            quantidade,
            categoria
        } = request.body;

        const result = await book.create({
            titulo,
            autor,
            editora,
            edicao,
            anoPublicacao,
            preco,
            quantidade,
            categoria
        });

        return response.status(201).json(result);
    }

    async getAll(request, response) {
        const result = await book.find({});

        return response.status(200).json(result);
    }

    async getById(request, response) { 
        const { id } = request.params;

        if(!id) {
            return response.status(400).json({
                success: false,
                message: 'O ID não foi especificado!'
            });
        }

        const result = await book.findById(id);

        return response.status(200).json(result);
    }

    async delete(request, response) {
        const { id } = request.params;

        if(!id) {
            return response.status(400).json({
                success: false,
                message: 'O ID não foi especificado!'
            });
        }

        const result = await book.findByIdAndRemove(id, {
            useFindAndModify: false
        });

        return response.status(200).json(result);
    }

    async update(request, response) {
        const {
            titulo,
            autor,
            editora,
            edicao,
            anoPublicacao,
            preco,
            quantidade,
            categoria
        } = request.body;

        const { id } = request.params;

        if(!id) {
            return response.status(400).json({
                success: false,
                message: 'O ID não foi especificado!'
            });
        }

        const result = await book.findByIdAndUpdate(id, {
            titulo,
            autor,
            editora,
            edicao,
            anoPublicacao,
            preco,
            quantidade,
            categoria
        });

        return response.status(200).json(result);
    }
}

module.exports = new bookController();