module.exports = {

    friendlyName: 'Update inventory input',


    description: 'Helper to validate model to update inventory',


    inputs: {

        product: {
            type: 'number',
            isInteger: true,
            required: false
        },
        warehouse: {
            type: 'number',
            isInteger: true,
            required: false
        },
        unitOfMeasure: {
            type: 'number',
            isInteger: true,
            required: false
        },

        quantity: {
            type: 'number',
            columnName: 'Quantity',
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