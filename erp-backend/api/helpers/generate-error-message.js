module.exports = {

    friendlyName: 'Generate error response message',

    description: 'Helper designed to builds the response error message object',

    sync: true,

    inputs: {
        code: {
            description: 'Error code',
            type: 'string',
            required: true
        },
        message: {
            description: 'Error message',
            type: 'string',
            required: false
        },
        details: {
            description: 'Error details array',
            type: 'ref',
            required: false
        },
        trace_id: {
            description: 'Error trace id',
            type: 'string',
            required: false
        },
        documentation_url: {
            description: 'Error documentation url',
            type: 'string',
            required: false
        }
    },

    fn: (inputs, exits) => exits.success(
        { 
            status: sails.config.constants.status.ERROR, 
            error: {
                code: inputs.code,
                message: inputs.message,
                details: inputs.details
            },
            trace_id: inputs.trace_id,
            documentation_url: inputs.documentation_url
        })

};

