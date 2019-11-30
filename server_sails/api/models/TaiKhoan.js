/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var md5 = require('md5');

module.exports = {

  tableName: 'tai_khoan',

  // attributes: types, validations ans defaults values
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: {
      type: 'integer',
      autoIncrement: true,
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      unique: true,
      required: true,
    },
    type: {
      type: 'string',
      required: true
    },
  },
  beforeCreate: function (values, cb) {
    values.password = md5(values.password);
    cb();
  } 
};

