const express = require("express");
const router = express.Router();
const  bookController = require('../Controller/bookController');
const  userController = require('../Controller/userController');
const cartController = require('../Controller/shoppingCartController');

router.post('/cadastrar/livro',bookController.cadastrar);
router.get('/visualizar/livro',bookController.get);
router.get('/buscar/livro/:idbook',bookController.getById);
router.delete('/delete/livro/:idProdutoDelete',bookController.deleteBook);
router.put('/atualizar/livro/:bookIdUp',bookController.updateBook);

router.post('/cadastrar/usuario',userController.cadastrar);
router.get('/visualizar/usuario',userController.get);
router.get('/buscar/usuario/:iduser',userController.getById);
router.delete('/delete/usuario/:idUserDelete',userController.deleteUser);
router.put('/atualizar/usuario/:userIdUp',userController.updateUser);

router.post('/inserir/cart',cartController.inserir);
router.get('/visualizar/cart',cartController.get);
router.get('/buscar/cart/:idcart',cartController.getById);
router.delete('/delete/cart/:idCartDelete',cartController.deleteCart);

module.exports = router;