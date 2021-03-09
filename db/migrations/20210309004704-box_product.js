'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('box_product', {
      idBox: {
        type: Sequelize.INTEGER,
        references: {
          model: 'box',
          key: 'id'
        },
        idProduct: {
          type: Sequelize.INTEGER,
          references: {
            model: 'product',
            key:'id'
          }
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('box_product')
  }
};
