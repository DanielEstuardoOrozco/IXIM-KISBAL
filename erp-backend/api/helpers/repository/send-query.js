module.exports = {


    friendlyName: 'Send Query',


    description: 'Execute Query in Database',


    inputs: {
        Query: {
            type: 'string',
            required: true
        },
        Values: {
            type: 'ref',
            required: true
        }
    },


    fn: async ({ Query, Values }, exits) => {
        const { success } = exits;

        var result = await sails.sendNativeQuery(Query, Values)
            .intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });

        return success(result ? (result.recordset.length == 1 ? result.recordset[0] : result.recordset) : null);

    }


};