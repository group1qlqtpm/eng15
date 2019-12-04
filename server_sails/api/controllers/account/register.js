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

    var verifyUsername = await Account.find({
      where: { username: inputs.username},
      select: ['id','username', 'name', 'type']
    });

    if(verifyUsername.length > 0){
      return exits.success({
        message: 'User name created before.',
        data: []
      }); 
    }

    var userRecord = await Account.create({username: inputs.username, password: inputs.password, name: inputs.name, type: 1}).fetch();

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid, problem creating user'
      });
    }

    return exits.success({
      message: 'User has been created successfully.',
      data: [{
        id: userRecord.id,
        username: userRecord.username,
        type: userRecord.type,
        name: userRecord.name
      }]
    });

  }


};
