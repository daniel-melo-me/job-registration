const database = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }

    /**
     * Lista todos os registros 
     * 
     * @param object model 
     * 
     * @returns 
     */
    async listar(id = null) {
        if (id) {
            return database[this.model].findOne({
                where: {
                    id: Number(id)
                }
            });
        }
    
        return database[this.model].findAll();
    }

    /**
     * Cria um registro na base
     * 
     * @param object model 
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
    async atualizar(dados, id, transacao = {}) {
        return database[this.model]
        .update(
            dados,
            {
                where: {
                    id: id
                }
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
    async excluir(id) {
        return database[this.model]
        .destroy({ 
            where: { 
                id: Number(id) 
            } 
        });
    }

    /**
     * Atualiza vários registros na base
     * 
     * @param {json} dados 
     * @param {integer} id 
     */
    async atualizarVarios(dados, where, transacao = {}) {
        return database[this.model]
        .update(
            dados,
            {
                where: {
                    ...where
                }
            },
            transacao
        )
    }

}

module.exports = Services;