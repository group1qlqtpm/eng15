module.exports = {


  friendlyName: 'Register',


  description: 'User register.',


  inputs: {
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
  },


  exits: {
    invalid: {
      statusCode: 401,
      description: 'user register error' // this will not go in response
    },
    success: {
      statusCode: 200
    }
  },


  fn: async function (inputs, exits) {

    var userRecord = await Account.create({username: inputs.username, password: inputs.password, name: inputs.name, type: 1}).fetch();

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid, problem creating user'
      });
    }

    return exits.success({
      message: 'User has been created successfully.',
      data: userRecord
    });

  }


};
