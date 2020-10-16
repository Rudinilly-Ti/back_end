'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarefas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid_projeto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      uuid_bloco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_inicio:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_fim:{
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  }, 

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarefas')
  }
};
