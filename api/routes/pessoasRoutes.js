const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

// Rotas para pessoas
router.get('/pessoas/listar/:id?', PessoaController.listarPessoas);
router.post('/pessoas/criar', PessoaController.criarPessoa);
router.put('/pessoas/atualizar/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/deletar/:id', PessoaController.deletarPessoa);


module.exports = router;