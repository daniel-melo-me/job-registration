// const database = require('../models/index.js');
// const Sequelize = require('sequelize');

const {PessoasServices} = require('../services/index.js');
const pessoasServices = new PessoasServices();

class PessoaController {

    /**
     * Retorna todas as pessoas
     * 
     * @param {Response} res 
     * @returns 
     */
    static async listarTodasPessoas(_, res) {
        try {
            const pessoas = await pessoasServices.listarTodos();

            return res.status(200).json(pessoas ? {
                total: pessoas.length,
                pessoas: pessoas
            } : `Nenhum registro encontrado`);
        } catch (error) {
            return res.status(500).json(`Erro ao tentar buscar as pessoas - ${error.message}`);
        }
    }

    /**
     * Retorna todas as pessoas ativas
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async listarPessoasAtivas(_, res) {
        try {
            const pessoas = await pessoasServices.listarRegistrosAtivos();

            return res.status(200).json(pessoas ? {
                total: pessoas.length,
                pessoas: pessoas
            } : `Nenhum registro encontrado`);
        } catch (error) {
            return res.status(500).json(`Erro ao tentar buscar as pessoas - ${error.message}`);
        }
    }

    /**
     * Retorna um registro
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async listarPessoaPorId(req, res) {
        try {
            const pessoa = await pessoasServices.listar(req.params.id);
            return res.status(200).json(pessoa || "Nenhuma pessoa foi encontrada");
        } catch (error) {
            return res.status(500).send(`Erro ao tentar encontrar o registro = ${error.message}`);
        }
    }

    /**
     * Adiciona um registro
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async criarPessoa(req, res) {
        const novaPessoa = req.body;

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);

            return res.status(201).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar salvar o registro = ${error.message}`);
        }
    }

    /**
     * Atualiza um registro
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            await pessoasServices.atualizar(dados, Number(id));
            const pessoaAtualizada = await pessoasServices.listar(id);
            return res.status(201).json(pessoaAtualizada || "Nenhuma pessoa foi atualizada");
        } catch (error) {
            return res.status(500).send(`Erro ao tentar atualizar o registro = ${error.message}`);
        }
    }

    /**
     * Deleta um registro
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async deletarPessoa(req, res) {
        const { id } = req.params;

        try {

            // Verifica se existe alguém com o id informado
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            if (!pessoa) {
                return res.status(404).json({ message: `Nenhum registro encontrado com o id informado` });
            }

            // Faz a exclusão
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            
            return res.status(200).json({ 
                message: `${pessoa.nome} foi deletado com sucesso!`,
            });

        } catch (error) {
            return res.status(500).send(`Erro ao tentar deletar o registro = ${error.message}`);
        }
    }

    /**
     * Restaura um registro
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async restaurarPessoa(req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.restore({
                where: {
                    id: Number(id) 
                } 
            });

            const pessoaRestaurada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(201).json(pessoaRestaurada ? {
                message: `Registro restaurado`,
                pessoa: pessoaRestaurada
            } : `Nenhum registro encontrado`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar recuperar o registro = ${error.message}`);
        }
    }

    /**
     * Cancela um estudante e suas mátriculas 
     * 
     * @param Request req 
     * @param Response res 
     * @returns 
     */
    static async cancelarEstudante(req, res) {
        const { estudanteId } = req.params;

        try {
            const pessoa = await pessoasServices.listar(estudanteId);

            // Verifica se existe alguém com o id informado
            if (!pessoa) {
                return res.status(404).json({ message: `Nenhum registro encontrado com o id informado` });
            }
            
            // Cancela a pessoa
            await pessoasServices.cancelarPessoa(Number(estudanteId));

            return res.status(200).json({message: `Mátriculas do estudante ${pessoa.nome} foi cancelada com sucesso!`});
        } catch (error) {
            return res.status(500).send(`Erro ao tentar encontrar o registro = ${error.message}`);
        }
    }
}
// Exporta o modelo atual para ser utilizado no restante do código
module.exports = PessoaController;