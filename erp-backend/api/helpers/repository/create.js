module.exports = {


    friendlyName: 'Create action in model',


    description: 'Execute create action with specific model',


    inputs: {
        Model: {
            type: 'ref',
            required: true
        },
        Values: {
            type: 'ref',
            required: true
        },
        DB: {
            type: 'ref',
            required: false
        }
    },


    fn: async ({ Model, Values, DB }, exits) => {
        const { success } = exits;
        var result;

        var query = DB ? Model.create(Values).usingConnection(DB) : Model.create(Values);

        result = await query.fetch()
            .intercept(sails.config.constants.error.UNIQUE_ORM, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.UNIQUE, message: 'Error.Message.UniqueORM' };
            }).intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });

        return success(result);

    }

};