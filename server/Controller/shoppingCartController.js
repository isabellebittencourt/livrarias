const cart = require('../models/shoppingCart');

class shoppingCartController{
    //Cadastra um carrinho
    async inserir(req,res){
        var result = await cart.create(req.body);
        res.status(201).json(result);
        }

        //Busca ocarrinho:
        async get(req, res){
            res.status(200).json(await cart.find({}));
        }

        //buscar por Id
        async getById(req, res){
            var result = await cart.findById(req.params.idcart);
            res.status(200).json(result);
        }
        //deletar um carrinho por id
        async deleteCart(req, res){
            var result = await cart.findByIdAndRemove(req.params.idCartDelete);
            res.status(200).json(result);
        }

}

module.exports = new shoppingCartController();