var md5 = require('md5');

module.exports = {


  friendlyName: 'Account',


  description: 'User login.',


  inputs: {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    invalid: {
      statusCode: 400,
      description: 'user login error' // this will not go in response
    },
    success: {
      statusCode: 200
    }
  },


  fn: async function (inputs, exits) { 
    var userRecord = await Account.find({
      where: { username: inputs.username, password: md5(inputs.password) },
      select: ['id','username', 'name', 'type']
    });

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid, problem login user'
      });
    }

    return exits.success({
      message: 'User has been login successfully.',
      data: userRecord
    });

  }


};
