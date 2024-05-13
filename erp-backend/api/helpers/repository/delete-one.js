module.exports = {


    friendlyName: 'Delete one in model',


    description: 'Execute `delete one` with specific model',


    inputs: {
        Model: {
            type: 'ref',
            required: true
        },
        Criteria: {
            type: 'ref',
            required: true
        },
        DB: {
            type: 'ref',
            required: false
        }
    },

    fn: async ({ Model, Criteria, DB }, exits) => {
        const { success } = exits;
        var result;

        var query = DB ? Model.destroyOne(Criteria).usingConnection(DB) : Model.destroyOne(Criteria);

        result = await query
            .intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });

        return success(result);

    }

};