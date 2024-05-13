module.exports = {

    friendlyName: 'Update product type input',


    description: 'Helper to validate model to update product type',


    inputs: {

        product: {
            type: 'number',
            required: false,
            isInteger: true
        },
        unitOfMeasure: {
            type: 'number',
            required: false,
            isInteger: true
        },

        price: {
            type: 'number',
            columnType: 'float',
            required: false
        },
        priceType: {
            type: 'string',
            required: false,
            maxLength: 50
        },
        effectiveDate: {
            type: 'ref',
            required: false,
            columnType: 'datetime',
        },
        expiryDate: {
            type: 'ref',
            required: false,
            columnType: 'datetime',
        },

    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};