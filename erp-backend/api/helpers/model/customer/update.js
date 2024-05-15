module.exports = {

    friendlyName: 'Update customer input',


    description: 'Helper to validate model to update customer',


    inputs: {

        customerName: {
            type: 'string',
            required: false,
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