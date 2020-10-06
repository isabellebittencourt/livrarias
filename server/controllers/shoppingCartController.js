const cart = require('../models/shoppingCart');

class shoppingCartController {
    async add(request, response) {
        const {
            quantidade,
            precoTotal,
            userId,
            bookId
        } = request.body;

        const result = await cart.create({
            quantidade,
            precoTotal,
            userId,
            bookId
        });

        return response.status(201).json(result);
    }

    async getAll(request, response) {
        const result = await cart.find({});

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

        const result = await cart.findById(id);

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

        const result = await cart.findByIdAndRemove(id, {
            useFindAndModify: false
        });

        return response.status(200).json(result);
    }

}

module.exports = new shoppingCartController();