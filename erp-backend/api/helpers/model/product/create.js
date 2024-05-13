module.exports = {

    friendlyName: 'Create product input',


    description: 'Helper to validate model to create product',


    inputs: {

        productType: {
            type: 'number',
            required: true,
            isInteger: true
        },

        productName: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        productDescription: {
            type: 'string',
            required: true,
            maxLength: 500
        },
        barCode: {
            type: 'string',
            required: false,
            maxLength: 255
        },
        qrCode: {
            type: 'string',
            required: false,
            maxLength: 255
        },
        price: {
            type: 'number',
            columnType: 'float',
            required: true
        },
        productImage: {
            type: 'ref',
            columnType: 'blob',
            required: false,
        },
        productAditionalInfo: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        productionDate: {
            type: 'ref',
            columnType: 'date',
            required: false,
        },
        expirationDate: {
            type: 'ref',
            columnType: 'date',
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