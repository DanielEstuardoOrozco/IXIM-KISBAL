module.exports = {

    friendlyName: 'Create product price input',


    description: 'Helper to validate model to create product price',


    inputs: {

        product: {
            type: 'number',
            required: true,
            isInteger: true
        },
        unitOfMeasure: {
            type: 'number',
            required: true,
            isInteger: true
        },

        price: {
            type: 'number',
            columnType: 'float',
            required: true
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