use job_registration;
SHOW TABLE;
INSERT INTO pessoas (
        nome,
        descricao,
        data_nascimento,
        ativo,
        createdAt,
        updatedAt
    )
VALUES (
        'Virgulino Das Dores',
        'Porteiro',
        '1956-12-30',
        false,
        NOW(),
        NOW()
    );

select * from pessoas;


INSERT INTO experiencias (
    id,
    data_inicio,
    data_fim,
    emprego_atual,
    nome_empresa,
    nome_cargo,
    descricao,
    pessoa_id,
    createdAt,
    updatedAt
)
VALUES (
    id:int,
    'data_inicio:date',
    'data_fim:date',
    'emprego_atual:tinyint',
    'nome_empresa:varchar',
    'nome_cargo:varchar',
    'descricao:varchar',
    pessoa_id:int,
    'createdAt:datetime',
    'updatedAt:datetime'
);