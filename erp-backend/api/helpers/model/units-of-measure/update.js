module.exports = {

    friendlyName: 'Update unit of measure input',


    description: 'Helper to validate model to update unit of measure',


    inputs: {

        uomCode: {
            type: 'string',
            required: true
        },

        uomDescription: {
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