const user = require('../models/userSchema');

class userController {
    async add(request, response) {
        const {
            nome,
            cpf,
            email,
            dataNascimento
        } = request.body;

        const result = await user.create({
            nome,
            cpf,
            email,
            dataNascimento
        });

        return response.status(201).json(result);
    }

    async getAll(request, response) {
        const result = await user.find({});

        return response.status(200).json(result);
    }

    async getById(request, response) {
        const { id } = request.params;

        const result = await user.findById(id);

        return response.status(200).json(result);
    }

    async delete(request, response) {
        const { id } = request.params;

        const result = await user.findByIdAndRemove(id, {
            useFindAndModify: false
        });

        return response.status(200).json(result);
    }

    async update(request, response) {
        const {
            nome,
            cpf,
            email,
            dataNascimento
        } = request.body;

        const { id } = request.params;

        const result = await user.findByIdAndUpdate(id, {
            nome,
            cpf,
            email,
            dataNascimento
        });

        return response.status(200).json(result);
    }
}

module.exports = new userController();