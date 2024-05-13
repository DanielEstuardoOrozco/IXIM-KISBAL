module.exports = {

    friendlyName: 'Create product type input',


    description: 'Helper to validate model to create product type',


    inputs: {

        name: {
            type: 'string',
            required: true
        },

        description: {
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