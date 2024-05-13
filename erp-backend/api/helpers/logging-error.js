module.exports = {


    friendlyName: 'Logging error',


    description: 'Method to write in log any error object',

    sync: true,

    inputs: {
        err: {
            description: 'Error Object',
            type: 'ref',
            required: true,
        },
        traceId: {
            description: 'Error TraceId',
            type: 'string',
            required: false,
        },
    },


    fn: ({ err, traceId }, exits) => {
        if ((err && !err.raw) || (err && err.raw && !err.raw.codigoError))
            sails.log.error(`${traceId ? `${traceId}: ` : ""}${err.stack ? err.stack.replace(/\n/g, "") : err}`);
        return exits.success();
    }


};

