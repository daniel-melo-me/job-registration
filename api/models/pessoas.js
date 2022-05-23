'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pessoas extends Model {
        // Associações entre as tabelas
        static associate(models) {
            Pessoas.hasMany(models.Documentos, {
                foreignKey: 'pessoa_id'
            });
            Pessoas.hasMany(models.Experiencias, {
                foreignKey: 'pessoa_id'
            });
        }
    }
    Pessoas.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
        ativo: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Pessoas',
    });

    return Pessoas;
};