module.exports = {


  friendlyName: 'The test from id',


  description: '',


  inputs: {
    id: {
      type: "number",
      columnType: "int",
      isInteger: true,
      required: true
    }
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
    var testRecord = await TheTestAndTheChoiceQuestion.find({
      where: { id_test: inputs.id}
    }).populate('id_question');
    var Ids = _.map(testRecord[0].the_test_and_the_choice, 'id_question');
    console.log(Ids);
    if (!testRecord) {
      return exits.invalid({
        message: 'invalid, problem when get the test'
      });
    }

    return exits.success({
      message: 'User has been got the test, successfully.',
      data: testRecord
    });

  }


};
