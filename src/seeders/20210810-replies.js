'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'replies',
      [
        {
          reply_user: 15,
          reply_message: 'reply',
          replied_tweet_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            reply_user: 7,
            reply_message: 'reply',
            replied_tweet_id: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            reply_user: 5,
            reply_message: 'reply',
            replied_tweet_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Replies', null, {});
  },
};
