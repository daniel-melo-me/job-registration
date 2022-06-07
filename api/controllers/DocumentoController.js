const {DocumentosServices} = require('../services/index.js');
const documentosServices = new DocumentosServices();
const {PessoasServices} = require('../services/index.js');
const pessoasServices = new PessoasServices();

class DocumentoController {

    /**
     * Carrega um documento para a pessoa
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @returns 
     */
    static async upload(req, res) {
        const {file} = req;
        const {body} = req;
        const {pessoaId} = req.params;

        try {
            const pessoa = await pessoasServices.listar({id: Number(pessoaId)});
            if (pessoa.length < 1) {
                return res.status(404).json({ message: `Pessoa não encontrada!`});
            }

            const dados = {
                descricao: body.descricao,
                caminho: file.path,
                pessoa_id: Number(pessoaId)
            };

            const documento = await documentosServices.criar(dados);
            return res.status(200).json(documento ? {
                message: `Registro foi carregado com sucesso`,
                status: 200,
            } : `Ops! Algo deu errado.`);
        } catch (error) {
            return res.status(500).send(`Erro ao tentar carregar o registro: ${error.message}`);
        }
    }

}

// Exporta o modelo atual para ser utilizado no restante do código
module.exports = DocumentoController;