const { Router } = require('express');
const DocumentoController = require('../controllers/DocumentoController.js');
const multer = require('multer');
const multerConfig = require('../config/multer.js');

const router = Router();

const upload = multer(multerConfig);

// ROTAS
router
    .post('/documentos/upload/:pessoaId', upload.single("file"), DocumentoController.upload)

module.exports = router;