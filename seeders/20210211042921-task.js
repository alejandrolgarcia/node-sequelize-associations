'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'Build an app',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
