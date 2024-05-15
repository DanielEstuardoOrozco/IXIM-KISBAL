module.exports = {

    friendlyName: 'Update warehouse input',


    description: 'Helper to validate model to update warehouse',


    inputs: {

        warehouseName: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        phoneNumber: {
            type: 'string',
            required: false,
            maxLength: 50
        },
        location: {
            type: 'string',
            required: false
        },
        address: {
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