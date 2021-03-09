'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true,
      },
      category: {
        type: Sequelize.STRING(32),
        allowNULL:false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(500)
      },
      price: {
        type: Sequelize.REAL,
        allowNULL: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product')
  }
};
