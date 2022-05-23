'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Experiencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      data_fim: {
        type: Sequelize.DATEONLY
      },
      emprego_atual: {
        type: Sequelize.BOOLEAN
      },
      nome_empresa: {
        type: Sequelize.STRING
      },
      nome_cargo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      pessoa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pessoas', 
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Experiencias');
  }
};