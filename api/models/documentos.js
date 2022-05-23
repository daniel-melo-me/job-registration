'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Documentos extends Model {
        // Associações entre as tabelas
        static associate(models) {
            Documentos.belongsTo(models.Pessoas, {
                foreignKey: 'pessoa_id'
            });
        }
    }
    Documentos.init({
        descricao: DataTypes.STRING,
        caminho: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Documentos',
    });

    return Documentos;
};