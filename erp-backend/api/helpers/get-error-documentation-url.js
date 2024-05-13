module.exports = {

    friendlyName: 'Error Documentation Url',

    description: 'Gets error documentation url',

    sync: true,

    inputs: {
        code: {
            description: 'Error code',
            type: 'string',
            required: true
        }
    },

    fn: (inputs, exits) => {
        return exits.success(`${process.env.ERROR_DOCUMENTATION_URL}#${inputs.code}`);
    }
};

