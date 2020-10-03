const user = require('../models/userSchema');

class userController{
    //Cadastra um usuario
    async cadastrar(req,res){
        var result = await user.create(req.body );
        res.status(201).json(result);
        }

        //Busca o usuario:
        async get(req, res){
            res.status(404).json(  await user.find({}));
        }

        //buscar por Id
        async getById(req, res){
            var result = await user.findById(req.params.iduser);
            res.status(200).json(result);
        }
        //deletar um usuario por id
        async deleteUser(req, res){
            var result = await user.findByIdAndRemove( req.params.idUserDelete);
            res.status(200).json(result);
        }
        //atualizar um usuario por id
        async updateUser(req, res){
            var result = await user.findByIdAndUpdate(req.params.userIdUp,req.body);
            res.status(200).json(result);
        }
}

module.exports = new userController();