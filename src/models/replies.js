'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  replies.init({
    reply_user: DataTypes.INTEGER,
    reply_message: DataTypes.TEXT,
    replied_tweet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'replies',
  });
  return replies;
};