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