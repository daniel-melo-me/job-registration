const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes.js');
const experiencias = require('./experienciaRoutes.js');
const documentos = require('./documentosRoutes.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        experiencias,
        documentos
    );

    app.get("/", (__, res) => {
        res.status(200).send("Sistema gerenciador de vagas.");
    })
}