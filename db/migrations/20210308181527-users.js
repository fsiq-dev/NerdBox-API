'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('users', {
      id: {
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNUll: false,
        type: Sequelize.STRING(32)
      },
      email: {
        allowNUll: false,
        unique: true,
        type: Sequelize.STRING(32)
      },
      birth_date: {
        allowNUll: false,
        type: Sequelize.STRING(26)
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
  }
};
