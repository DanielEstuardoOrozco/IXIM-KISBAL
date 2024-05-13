module.exports = {

    friendlyName: 'Update user input',


    description: 'Helper to validate model to update user',


    inputs: {

        username: {
            type: 'string',
            required: false
        },

        email: {
            type: 'string',
            required: false,
            isEmail: true
        },

        passwordHash: {
            type: 'string',
            required: false
        }

    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};