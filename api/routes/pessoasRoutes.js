const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

// Rotas para pessoas
router.get('/pessoas/ativas', PessoaController.listarPessoasAtivas);
router.get('/pessoas/todas', PessoaController.listarTodasPessoas);
router.get('/pessoas/:id', PessoaController.listarPessoaPorId);
router.post('/pessoas', PessoaController.criarPessoa);
router.post('/pessoas/:id/restaurar', PessoaController.restaurarPessoa);
router.post('/pessoas/:estudanteId/cancelar', PessoaController.cancelarEstudante);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/:id', PessoaController.deletarPessoa);


module.exports = router;