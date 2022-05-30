const database = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }

    /**
     * Lista todos os registros 
     * 
     * @param {query} where 
     * 
     * @returns {model}
     */
    async listar(where = {}) {
        return database[this.model].findAll({ where: { ...where } });
    }

    /**
     * Cria um registro na base
     * 
     * @param {json} dados 
     * 
     * @returns 
     */
    async criar(dados) {
        return database[this.model].create(dados);
    }

    /**
     * Atualiza um registro na base
     * 
     * @param {json} dados 
     * @return {boolean} 
     */
    async atualizar(dados, where = {}, transacao = {}) {
        return database[this.model]
        .update(
            dados,
            { 
                where: { ...where } 
            },
            transacao
        )
    }

    /**
     * Deleta um registro na base
     * 
     * @param {integer} id 
     * @return {boolean} 
     */
    async excluir(where = {}) {
        return database[this.model]
        .destroy({ where: { ...where } });
    }
}

module.exports = Services;