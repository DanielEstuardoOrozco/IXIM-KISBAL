module.exports = {

    friendlyName: 'Update provider input',


    description: 'Helper to validate model to update provider',


    inputs: {

        providerName: {
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
        website: {
            type: 'string',
            required: false,
            maxLength: 255
        },
        linkedIn: {
            type: 'string',
            required: false,
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