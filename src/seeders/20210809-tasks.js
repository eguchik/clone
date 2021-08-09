'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Alice',
          emal: 'Alice@gmail.com',
          password: 'p@ssword',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Iris',
          emal: 'Iris@gmail.com',
          password: 'p@ssword',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jane',
          emal: 'Jane@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ruis',
          emal: 'Ruis@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
