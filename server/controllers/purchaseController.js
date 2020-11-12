const purchase = require('../models/purchaseSchema');

class purchaseController {
    async add(request, response) {
        const {
            usuario,
            itens
        } = request.body;

        const result = await purchase.create({
            usuario,
            itens
        })
        .catch(() => {
            return response.status(400).json({
                success: false,
                message: 'Erro ao efetuar a operação'
            });
        });

        return response.status(201).json(result);
    }

    async getAll(request, response) {
        const result = await purchase.find({});

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

        const result = await purchase.findById(id)
        .catch(() => {
            return response.status(400).json({
                success: false,
                message: 'Erro ao efetuar a operação'
            });
        });

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

        const result = await purchase.findByIdAndRemove(id, {
            useFindAndModify: false
        })
        .catch(() => {
            return response.status(400).json({
                success: false,
                message: 'Erro ao efetuar a operação'
            });
        });

        return response.status(200).json(result);
    }

}

module.exports = new purchaseController();