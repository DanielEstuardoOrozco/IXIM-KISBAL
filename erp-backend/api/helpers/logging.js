module.exports = {

    friendlyName: 'Logging',

    description: 'Logging messages.',

    sync: true,

    inputs: {
        log: {
            description: 'Logging function',
            type: 'ref',
            required: true
        },
        data: {
            description: 'Data to be logged',
            type: 'ref',
            required: true
        }
    },

    fn: (inputs, exits) => {
        inputs.log(inputs.data);
        return exits.success(inputs.data);
    }
};

