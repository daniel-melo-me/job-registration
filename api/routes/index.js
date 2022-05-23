const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes.js');
// const niveis = require('./niveisRoutes.js');
// const turmas = require('./turmasRoutes.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas
    );

    app.get("/", (__, res) => {
        res.status(200).send("Sistema gerenciador de vagas.");
    })
}