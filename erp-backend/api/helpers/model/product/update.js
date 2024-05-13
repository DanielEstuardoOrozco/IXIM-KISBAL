module.exports = {

    friendlyName: 'Update product type input',


    description: 'Helper to validate model to update product type',


    inputs: {

        productType: {
            type: 'number',
            required: false,
            isInteger: true
        },

        productName: {
            type: 'string',
            required: false,
            maxLength: 255
        },
        productDescription: {
            type: 'string',
            required: false,
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
            required: false
        },
        productImage: {
            type: 'ref',
            columnType: 'blob',
            required: false,
        },
        productAditionalInfo: {
            type: 'string',
            required: false,
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