# SISTEMA GERENCIADOR DE CANDIDATOS A VAGAS DE EMPREGOS

# Fazer a configuração com o banco no arquivo api/config/config.json. Da linha 03 até 07
DATA_BASE: MySql
    create database job_registration;
use job_registration

# NÃO EXECUTAR esses comandos(Apenas para ver como foi criado as tabelas via migrate)
TABLES:
    Pessoas:
        npx sequelize-cli model:create --name Pessoas --attributes nome:string,descricao:string,data_nascimento:dateonly,ativo:boolean
    
    Documentos:
        npx sequelize-cli model:create --name Niveis --attributes desc_nivel:string
    
    Turmas:
        npx sequelize-cli model:create --name Documentos --attributes descricao:string,caminho:string
    
    Experiências:
        npx sequelize-cli model:create --name Experiencias --attributes data_inicio:dateonly,data_fim:dateonly,emprego_atual:boolean,nome_empresa:string,nome_cargo:string,descricao:string

# RODAR npm install

# RODAR ESSE COMANDO APÓS O BANCO 'job_registation' TER SIDO CRIADO E o npm install ter sido executado

Rodar as migrations:
    npx sequelize-cli db:migrate

# NÃO RODAR (Só foi a forma que eu criei a seeder)
SEEDERS:
    Pessoas:
        npx sequelize-cli seed:generate --name demo-pessoa

# RODAR PARA INSERIR UMAS PESSOAS NA BASE
Rodar as seeders:
    npx sequelize-cli db:seed:all

DOCUMENTAÇÃO
API para fazer o cadastro de currículos de candidatos a uma vaga.
A API deverá permitir que seja feito primeiramente o cadastro do candidato, com nome, descrição pessoal, data de nascimento, e experiência.
A experiência deverá ser uma lista, que tenha data de início, data de fim, nome da empresa, nome do cargo e descrição.
O candidato também poderá subir um documento que é seu currículo em pdf ou docx.

ENDPOINTS CANDIDATO/PESSOA:

    CRIAR
        - Adiciona uma nova pessoa na tabela 'pessoas'
        METHOD: POST
        URL: http://[localhost:3000]/pessoas/criar
        PARAMS:
        BODY:
            {
                "nome": "Nome da Pessoa (STRING)",
                "descricao": "Descrição da pessoa (STRING)",
                "data_nascimento": "Data de nascimento no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "ativo": BOOLEAN
            }

    LISTAR
        - O parâmetro 'pessoId' é opcional. Caso não mandar, busca todas as pessoas
        METHOD: GET
        URL: http://[localhost:3000]/pessoas/listar/[pessoaId]
        PARAMS: pessoaId (INTEGER)
        BODY:
            {} 
    
    DELETAR
        - Deleta um registro na base.
        METHOD: DELETE
        URL: http://[localhost:3000]/pessoas/deletar/[pessoaId]
        PARAMS: pessoaId (INTEGER)
        BODY:
            {}

    ATUALIZAR
        - Atualiza um registro na base. Mandar somente os campos que serão atualizados
        METHOD: PUT
        URL: http://[localhost:3000]/pessoas/atualizar/[pessoaId]
        PARAMS: pessoaId (INTEGER)
        BODY:
            {
                "nome": "Novo nome (STRING)",
                "descricao": "Nova descrição (STRING)",
                "data_nascimento": "Nova data de nascimento no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "ativo": BOOLEAN
            }

ENDPOINTS EXPERIÊNCIAS

    CRIAR
        - Adiciona uma nova experiência para uma pessoa na tabela 'experiencias'
        METHOD: POST
        URL: http://[localhost:3000]/experiencias/criar
        PARAMS:
        BODY:
            {
                "data_inicio": "Data de início no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "data_fim": "Data fim(Se houver) no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "emprego_atual": BOOLEAN,
                "nome_empresa": "Nome da empresa (STRING)",
                "nome_cargo": "Nome do cargo (STRING)",
                "descricao": "Descrição da experiência (STRING)",
                "pessoa_id": Id da pessoa a quem essa experiência pertence (INTEGER)
            }

    LISTAR
        - O parâmetro 'pessoId' é opcional. Caso não mandar, busca todas as experiências
        METHOD: GET
        URL: http://[localhost:3000]/experiencias/listar/[pessoaId]
        PARAMS: pessoaId (INTEGER)
        BODY:
            {}

    DELETAR
        - Deleta um registro na base. Importante mandar o id da pessoa e o id da experiencia a ser deletada
        - Necessário enviar o id da pessoa e o id da experiência a ser deletada
        METHOD: DELETE
        URL: http://[localhost:3000]/experiencias/deletar/[pessoaId]/[experienciaId]
        PARAMS: pessoaId (INTEGER), experienciaId (INTEGER) 
        BODY:
            {}
    
    ATUALIZAR
        - Importante mandar o id da pessoa e o id da experiencia a ser deletada
        - Atualiza um registro na base. Mandar somente os campos que serão atualizados
        METHOD: PUT
        URL: http://[localhost:3000]/experiencias/atualizar/[pessoaId]/[experienciaId]
        PARAMS: pessoaId (INTEGER), experienciaId (INTEGER) 
        BODY:
            {
                "data_inicio": "NOVA data de início no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "data_fim": "NOVA data fim(Se houver) no formatoo 'YYYY-MM-DD' (DATEONLY)",
                "emprego_atual": BOOLEAN,
                "nome_empresa": "Novo nome da empresa (STRING)",
                "nome_cargo": "Novo nome do cargo (STRING)",
                "descricao": "Nova descrição da experiência (STRING)",
                "pessoa_id": Id da pessoa a quem essa experiência pertence (INTEGER)
            }

- UPLOAD de um arquivo para um candidato