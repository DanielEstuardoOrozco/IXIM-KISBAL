module.exports = {

    friendlyName: 'Create inventory input',


    description: 'Helper to validate model to create inventory',


    inputs: {

        product: {
            type: 'number',
            isInteger: true,
            required: true
        },
        warehouse: {
            type: 'number',
            isInteger: true,
            required: true
        },
        unitOfMeasure: {
            type: 'number',
            isInteger: true,
            required: true
        },

        quantity: {
            type: 'number',
            columnName: 'Quantity',
            required: true
        },
        
    },


    exits: {

        success: {
            description: 'successful validation.',
        },

    },


    fn: async (inputs, exits) => exits.success(inputs)


};