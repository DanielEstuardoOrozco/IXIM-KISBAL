module.exports = {

    friendlyName: 'Generate success response message',

    description: 'Helper designed to builds the response error message object',

    sync: true,

    inputs: {
        message: {
            description: 'Message response',
            type: 'string',
            required: false
        },
        data: {
            description: 'Data response',
            type: 'ref',
            required: false
        },
        meta: {
            description: 'Meta response',
            type: 'ref',
            required: false
        }
    },

    fn: (input, exits) => exits.success({ status: sails.config.constants.status.SUCCESS, message: sails.config.constants.message[input.message], data: (input.data), meta: (input.meta) })

};

