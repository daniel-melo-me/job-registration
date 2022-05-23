# Sistema gerenciador de candidatos a vagas de empregos

DATA_BASE: MySql
    create database job_registration;
use job_registration

TABLES:
    Pessoas:
        npx sequelize-cli model:create --name Pessoas --attributes nome:string,descricao:string,data_nascimento:dateonly,ativo:boolean
    
    Documentos:
        npx sequelize-cli model:create --name Niveis --attributes desc_nivel:string
    
    Turmas:
        npx sequelize-cli model:create --name Documentos --attributes descricao:string,caminho:string
    
    Experiências:
        npx sequelize-cli model:create --name Experiencias --attributes data_inicio:dateonly,data_fim:dateonly,emprego_atual:boolean,nome_empresa:string,nome_cargo:string,descricao:string
    
Rodar as migrations:
    npx sequelize-cli db:migrate

// Não precisa rodar
SEEDERS:
    Pessoas:
        npx sequelize-cli seed:generate --name demo-pessoa
    
Rodar as seeders:
    npx sequelize-cli db:seed:all