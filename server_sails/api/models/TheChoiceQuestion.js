/**
	Generated by sails-inverse-model
	Date:Wed Dec 04 2019 03:04:13 GMT+0700 (Indochina Time)
*/

module.exports = {
    tableName: 'the_choice_question',
    attributes: {
        createdAt: false,
        updatedAt: false,
        id: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        content: {
            type: "string",
            columnType: "varchar",
            maxLength: 100
        },
        choice_a: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        choice_b: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        choice_c: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        choice_d: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        answer: {
            type: "string",
            columnType: "varchar",
            maxLength: 45
        },
        // Add a reference to  the choice question
        the_test_and_the_choice: {
            collection: 'thetestandthechoicequestion',
            via: 'id_question'
        },

        the_test: {
            collection: 'thetest',
            via: 'the_choice_question'
        }
    }
};