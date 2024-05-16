module.exports = {

    friendlyName: 'Create role input',


    description: 'Helper to validate model to create role',


    inputs: {

        roleName: {
            type: 'string',
            required: true,
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