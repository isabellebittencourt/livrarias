const category = require('../models/categorySchema');

class categoryController {
    async add(request, response) {
        const {
            nome
        } = request.body;

        const result = await category.create({
            nome
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
        const result = await category.find({})
        .catch(() => {
            return response.status(400).json({
                success: false,
                message: 'Erro ao efetuar a operação'
            });
        });

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

        const result = await category.findById(id)
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

        const result = await category.findByIdAndRemove(id, {
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

    async update(request, response) {
        const {
            nome
        } = request.body;

        const { id } = request.params;

        if(!id) {
            return response.status(400).json({
                success: false,
                message: 'O ID não foi especificado!'
            });
        }

        const result = await category.findByIdAndUpdate(id, {
            nome
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

module.exports = new categoryController();