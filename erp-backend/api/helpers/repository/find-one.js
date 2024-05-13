module.exports = {


    friendlyName: 'Find one in model',


    description: 'Execute `find one` with specific model',


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
        },
        ErrorIfNotFound: {
            type: 'ref',
            required: false
        },
        SortAsc: {
            type: 'boolean',
            require: false
        }
    },


    fn: async ({ Model, Criteria, DB, ErrorIfNotFound, SortAsc }, exits) => {
        const { success } = exits;

        var query = DB ? Model.find(Criteria).usingConnection(DB) : Model.find(Criteria);

        var result = await query.limit(1).sort([
            { id: SortAsc ? 'ASC' : 'DESC' }
        ])
            .intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });
        
        if (ErrorIfNotFound && !result.length) {
            throw { code: sails.config.constants.error.RESOURCE_NOT_FOUND, message: 'Error.Message.ResourceNotFound' };
        }

        return success(result[0]);
    }

};