'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tweets',
      [
        {
          user_id: 0,
          tweet: 'first tweet',
          n_like: 0,
          n_retweet: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            user_id: 1,
            tweet: 'first tweet',
            n_like: 0,
            n_retweet: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            user_id: 2,
            tweet: 'first tweet',
            n_like: 0,
            n_retweet: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tweets', null, {});
  },
};
