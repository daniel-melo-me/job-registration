'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Experiencias extends Model {
        // Associações entre as tabelas
        static associate(models) {
            Experiencias.belongsTo(models.Pessoas, {
                foreignKey: 'pessoa_id'
            });
        }
    }
    Experiencias.init({
        data_inicio: DataTypes.DATEONLY,
        data_fim: DataTypes.DATEONLY,
        emprego_atual: DataTypes.BOOLEAN,
        nome_empresa: DataTypes.STRING,
        nome_cargo: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Experiencias',
    });

    return Experiencias;
};