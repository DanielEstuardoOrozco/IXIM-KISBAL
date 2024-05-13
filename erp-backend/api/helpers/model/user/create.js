module.exports = {

    friendlyName: 'Create user input',


    description: 'Helper to validate model to create user',


    inputs: {

        company: {
            type: 'number',
            required: true
        },

        username: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: true,
            isEmail: true
        },

        passwordHash: {
            type: 'string',
            required: true
        }

    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};