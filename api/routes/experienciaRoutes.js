const { Router } = require('express');
const ExperienciaController = require('../controllers/ExperienciaController.js');

const router = Router();

// Rotas para experiencias
router
    .get('/experiencias/listar/:pessoaId?', ExperienciaController.listarExperiencias)
    .post('/experiencias/criar', ExperienciaController.criarExperiencia)
    .put('/experiencias/atualizar/:pessoaId/:experienciaId', ExperienciaController.atualizarExperiencia)
    .delete('/experiencias/deletar/:pessoaId/:experienciaId', ExperienciaController.deletarExperiencia)

module.exports = router;