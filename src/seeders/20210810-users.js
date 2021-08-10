'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Oskar',
          emal: 'oskar@gmail.com',
          password: 'p@ssword',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Corneria',
          emal: 'corneria@gmail.com',
          password: 'p@ssword',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Harol',
          emal: 'harol@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
