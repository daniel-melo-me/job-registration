const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes.js');
const experiencias = require('./experienciaRoutes.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        experiencias
    );

    app.get("/", (__, res) => {
        res.status(200).send("Sistema gerenciador de vagas.");
    })
}