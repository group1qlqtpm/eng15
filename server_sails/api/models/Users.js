/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {



  tableName: 'users',

  // attributes: types, validations ans defaults values
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
    },
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
    },
    phone: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true,
    },
  },


};

