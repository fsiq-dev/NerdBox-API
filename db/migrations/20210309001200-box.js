'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('box', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNUll: false,
      },
      name: {
        type: Sequelize.STRING(32),
        unique: true,
        allowNUll:false
      },
      description: {
        type: Sequelize.STRING(500),
        allowNUll: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNUll: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('box');
  }
};
