module.exports = {

    friendlyName: 'Update role input',


    description: 'Helper to validate model to update role',


    inputs: {

        roleName: {
            type: 'string',
            required: false,
            maxLength: 255
        },
        description: {
            type: 'string',
            required: false,
        },

    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};