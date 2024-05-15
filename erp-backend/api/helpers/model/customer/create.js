module.exports = {

    friendlyName: 'Create product input',


    description: 'Helper to validate model to create product',


    inputs: {

        customerName: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        contactInfo: {
            type: 'string',
            required: false,
        },
        phoneNumber: {
            type: 'string',
            required: false,
            maxLength: 50
        },
        email: {
            type: 'string',
            required: false,
            isEmail: true,
            maxLength: 255
        },
        aditionalInfo: {
            type: 'string',
            required: false,
            maxLength: 255
        },
    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};