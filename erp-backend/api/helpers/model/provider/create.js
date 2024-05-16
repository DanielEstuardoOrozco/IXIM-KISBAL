module.exports = {

    friendlyName: 'Create provider input',


    description: 'Helper to validate model to create provider',


    inputs: {

        providerName: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        contactInfo: {
            type: 'string',
            required: true,
        },
        phoneNumber: {
            type: 'string',
            required: true,
            maxLength: 50
        },
        email: {
            type: 'string',
            required: true,
            isEmail: true,
            maxLength: 255
        },
        website: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        linkedIn: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        logo: {
            type: 'ref',
            columnType: 'blob',
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