module.exports = {


    friendlyName: 'Find in model',


    description: 'Execute `find` with specific model',


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
        CurrentPage: {
            type: 'number',
            required: false
        },
        PageSize: {
            type: 'number',
            required: false
        },
        SortAsc: {
            type: 'boolean',
            require: false
        }
    },


    fn: async ({ Model, Criteria, DB, CurrentPage, PageSize, SortAsc }, exits) => {
        const { success } = exits;

        var query = DB ? Model.find(Criteria).usingConnection(DB) : Model.find(Criteria);

        if (CurrentPage){
            query = query.skip((CurrentPage - 1) * PageSize);
        }

        if (PageSize){
            query = query.limit(PageSize);
        }

        var result = await query.sort([
            { id: SortAsc ? 'ASC' : 'DESC' }
        ])
            .intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });

        // Meta
        var queryCount = DB ? Model.count(Criteria).usingConnection(DB) : Model.count(Criteria);

        var resultCount = await queryCount
            .intercept({ name: sails.config.constants.error.USAGE_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.USAGE, message: 'Error.Message.UsageORM' };
            }).intercept({ name: sails.config.constants.error.ADAPTER_ORM }, (err) => {
                sails.helpers.loggingError(err);
                throw { code: sails.config.constants.error.ADAPTER, message: 'Error.Message.AdapterORM' };
            });
    

        return success({
            data: result,
            total: resultCount
        });

    }


};