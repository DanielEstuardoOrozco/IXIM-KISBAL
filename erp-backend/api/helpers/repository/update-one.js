module.exports = {


    friendlyName: 'Update one in model',


    description: 'Execute `update one` with specific model',


    inputs: {
        Model: {
            type: 'ref',
            required: true
        },
        Criteria: {
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


    fn: async ({ Model, Criteria, Values, DB }, exits) => {
        const { success } = exits;

        var query = DB ? Model.updateOne(Criteria).set(Values).usingConnection(DB) : Model.updateOne(Criteria).set(Values);

        var result = await query
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