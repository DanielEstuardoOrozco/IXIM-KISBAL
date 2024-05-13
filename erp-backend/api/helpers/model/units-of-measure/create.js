module.exports = {

    friendlyName: 'Create product type input',


    description: 'Helper to validate model to create product type',


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