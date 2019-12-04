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
    var choiceQuestionRecord = await TheTestAndTheChoiceQuestion.find({
      where: { id_test: inputs.id}
    }).populate('id_question');

    var sentenceQuestionRecord = await TheTestAndTheSentenceQuestion.find({
      where: { id_test: inputs.id}
    }).populate('id_question');
    
    choiceQuestionRecord = _.map(choiceQuestionRecord, 'id_question');
    sentenceQuestionRecord = _.map(sentenceQuestionRecord, 'id_question');
    //console.log(_.map(choiceQuestionRecord, 'id_question'));
    if (!choiceQuestionRecord || !sentenceQuestionRecord) {
      return exits.invalid({
        message: 'invalid, problem when get the test'
      });
    }

    return exits.success({
      message: 'User has been got the test, successfully.',
      data: {
        choiceQuestion: choiceQuestionRecord,
        sentenceQuestion: sentenceQuestionRecord
      }
    });

  }


};
