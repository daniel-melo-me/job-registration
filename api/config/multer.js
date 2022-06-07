const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {PessoasServices} = require('../services/index.js');
const pessoasServices = new PessoasServices();

/**
 * Realiza o upload de um arquivo
 */
const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const {pessoaId} = req.params;
            const pessoa = pessoasServices.listar({id: Number(pessoaId)});
            if (pessoa < 1) {
                return cb(new Error('Pessoa não encontrada.'));
            }
            const path = "uploads/documentos/pessoa";
            fs.mkdirSync(path, { recursive: true });
            cb(null, path);
        },
        filename: function (req, file, cb) {
            const name = file.originalname.split(".")[0];
            cb(null, name + '_' + Date.now() + '_' + req.params.pessoaId + path.extname(file.originalname));
        }
    }),
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.docx' && ext !== '.jpg') {
            return cb(new Error('Apenas arquivos .pdf e .docx são permitidos'));
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = storage;