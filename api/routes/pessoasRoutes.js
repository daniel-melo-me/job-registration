const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const router = Router();

// ROTAS
router
    .get('/pessoas/listar/:id?', PessoaController.listarPessoas)
    .post('/pessoas/criar', PessoaController.criarPessoa)
    .put('/pessoas/atualizar/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/deletar/:id', PessoaController.deletarPessoa)

module.exports = router;