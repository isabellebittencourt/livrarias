const express = require("express");
const router = express.Router();

const bookController = require('../controllers/bookController');
const userController = require('../controllers/userController');
const cartController = require('../controllers/shoppingCartController');
const purchaseController = require('../controllers/purchaseController');

router.post('/livro/cadastrar', bookController.add);
router.get('/livro/listar', bookController.getAll);
router.get('/livro/buscar/:id', bookController.getById);
router.delete('/livro/deletar/:id', bookController.delete);
router.put('/livro/atualizar/:id', bookController.update);

router.post('/usuario/cadastrar', userController.add);
router.get('/usuario/listar', userController.getAll);
router.get('/usuario/buscar/:id', userController.getById);
router.delete('/usuario/deletar/:id', userController.delete);
router.put('/usuario/atualizar/:id', userController.update);

router.post('/carrinho/cadastrar', cartController.add);
router.get('/carrinho/listar', cartController.getAll);
router.get('/carrinho/buscar/:id', cartController.getById);
router.delete('/carrinho/deletar/:id', cartController.delete);

router.post('/compra/cadastrar', purchaseController.add);
router.get('/compra/listar', purchaseController.getAll);
router.get('/compra/buscar/:id', purchaseController.getById);
router.delete('/compra/deletar/:id', purchaseController.delete);

module.exports = router;