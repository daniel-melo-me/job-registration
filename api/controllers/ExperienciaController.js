const {ExperienciasServices} = require('../services/index.js');
const {PessoasServices} = require('../services/index.js');
const experienciasServices = new ExperienciasServices();
const pessoasServices = new PessoasServices();

class ExperienciaController {

    /**
     * Retorna todas as experiencias ou de uma pessoa específica
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async listarExperiencias(req, res) {
        const {pessoaId} = req.params;
        try {
            const experiencias = await experienciasServices.listar(pessoaId ? {pessoa_id: Number(pessoaId)} : null);

            return res.status(200).json(experiencias.length > 0 ? {
                status: 200,
                total: experiencias.length,
                experiencias: experiencias
            } : `Nenhum registro encontrado`);
        } catch (error) {
            return res.status(500).json(`Erro ao tentar buscar as experiencias - ${error.message}`);
        }
    }

    /**
     * Adiciona um registro
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async criarExperiencia(req, res) {
        const novaExperiencia = req.body;
        try {
            const experiencia = await experienciasServices.criar(novaExperiencia);
            return res.status(201).json(experiencia ? {
                message: 'Registro salvo com sucesso!',
                status: 201,
                experiencia: experiencia
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
    static async atualizarExperiencia(req, res) {
        const { pessoaId } = req.params;
        const { experienciaId } = req.params;
        const dados = req.body;

        try {
            const experiencia = await experienciasServices.listar(
                {
                    pessoa_id: Number(pessoaId),
                    id: Number(experienciaId)
                }
            );

            if (experiencia.length < 1) {
                return res.status(404).json({ message: `Experiência não encontrada!` });
            }

            // Realiza o update
            const atualizado = await experienciasServices.atualizar(
                dados, 
                {
                    pessoa_id: Number(pessoaId),
                    id: Number(experienciaId)
                }
            );

            return res.status(201).json(atualizado ? {
                message: 'Registro alterado com sucesso!',
                status: 201
            } : `Ops! Algo deu errado.`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar atualizar o registro = ${error.message}`);
        }
    }

    /**
     * Deleta as expêriencias da pessoa informada
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async deletarExperiencia(req, res) {
        const { pessoaId } = req.params;
        const { experienciaId } = req.params;

        try {
            // Verifica se existe alguém com o id informado
            const pessoa = await pessoasServices.listar({id: Number(pessoaId)});
            if (pessoa.length < 1) {
                return res.status(404).json({ message: `Nenhuma pessoa encontrada!` });
            }

            // Verifica se possui experiência
            const experiencia = await experienciasServices.listar(
                {
                    pessoa_id: Number(pessoaId),
                    id: Number(experienciaId),
                }
            );

            if (experiencia.length < 1) {
                return res.status(404).json({ message: `Nenhuma experiência foi encontrada!` });
            }

            // Faz a exclusão
            const deletado = await experienciasServices.excluir(
                {
                    pessoa_id: Number(pessoaId),
                    id: Number(experienciaId),
                }
            );

            return res.status(200).json(deletado ? {
                message: `Expêriencia de ${pessoa[0].nome} com id: ${experienciaId}, foi deletada com sucesso!`,
                status: 200,
            } : `Ops! Algo deu errado.`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar deletar o registro = ${error.message}`);
        }
    }
}

// Exporta o modelo atual para ser utilizado no restante do código
module.exports = ExperienciaController;