var md5 = require('md5');

module.exports = {


  friendlyName: 'Dangnhap',


  description: 'Dangnhap taikhoan.',


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
    
    var userRecord = await TaiKhoan.find({
      where: { username: inputs.username, password: md5(inputs.password) },
      select: ['id','username', 'name', 'type']
    });

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid, problem creating user'
      });
    }

    if (userRecord.length <= 0) {
      return exits.invalid({
        message: 'password or user name error!'
      });
    }

    return exits.success({
      message: 'User has been login successfully.',
      data: userRecord
    });

  }


};
