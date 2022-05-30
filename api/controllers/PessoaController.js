const {PessoasServices} = require('../services/index.js');
const pessoasServices = new PessoasServices();

class PessoaController {

    /**
     * Retorna todas as pessoas ativas ou por um id específico
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async listarPessoas(req, res) {
        const {id} = req.params;
        try {
            const pessoas = await pessoasServices.listar(id ? {id: id} : null);
            return res.status(200).json(pessoas.length > 0 ? {
                status: 200,
                total: pessoas.length,
                pessoas: pessoas
            } : `Nenhum registro encontrado`);
        } catch (error) {
            return res.status(500).json(`Erro ao tentar buscar as pessoas - ${error.message}`);
        }
    }

    /**
     * Adiciona um registro
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async criarPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const pessoa = await pessoasServices.criar(novaPessoa);
            return res.status(201).json(pessoa ? {
                message: 'Registro salvo com sucesso!',
                status: 201,
                pessoa: pessoa
            } : `Ops! Algo deu errado.`);

        } catch (error) {
            return res.status(500).send(`Erro ao tentar salvar o registro = ${error.message}`);
        }
    }

    /**
     * Atualiza um registro
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            // Verifica se existe pessoa
            const pessoa = await pessoasServices.listar({id: Number(id)});
            if (pessoa.length < 1) {
                return res.status(404).json({ message: `Nenhuma pessoa encontrada!`});
            }

            // Faz o update
            const alterado = await pessoasServices.atualizar(dados, {id: Number(id)});
            return res.status(201).json(alterado ? {
                message: 'Registro alterado com sucesso!',
                status: 201,
                pessoa: pessoa
            } : `Ops! Algo deu errado.`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar atualizar o registro = ${error.message}`);
        }
    }

    /**
     * Deleta um registro
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async deletarPessoa(req, res) {
        const { id } = req.params;
        try {
            // Verifica se existe alguém com o id informado
            const pessoa = await pessoasServices.listar({id: id});
            if (pessoa.length < 1) {
                return res.status(404).json({ message: `Nenhum registro encontrado com o id informado` });
            }

            // Faz a exclusão
            const deletado = await pessoasServices.excluir({id: id});
            return res.status(200).json(deletado ? {
                message: `${pessoa[0].nome} foi deletado(a) com sucesso!`,
                status: 200,
            } : `Ops! Algo deu errado.`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar deletar o registro = ${error.message}`);
        }
    }
}

// Exporta o modelo atual para ser utilizado no restante do código
module.exports = PessoaController;