module.exports = {

    friendlyName: 'Create unit of measure input',


    description: 'Helper to validate model to create unit of measure',


    inputs: {

        uomCode: {
            type: 'string',
            required: true
        },

        uomDescription: {
            type: 'string',
            required: false
        },
    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};