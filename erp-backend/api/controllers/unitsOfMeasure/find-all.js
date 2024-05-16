module.exports = {
    
    friendlyName: 'Find All Units of Measure',

    description: 'Find all unit of measure.',

    exits: {
        ok: {
            responseType: 'ok'
        },
        serverError: {
            responseType: 'serverError'
        }
    },

    fn: async ( _ , exits, env) => {

        let { serverError, ok } = exits;
        let { req } = env;
        let sendError = sails.helpers.sendError;
        
        try {
            
            let unitsOfMeasure = {};
            let pageSize = req.pageSize;
            let currentPage = req.currentPage;

            await sails.getDatastore().transaction(async (db) => {
                
                unitsOfMeasure = await sails.helpers.repository.find(UnitsOfMeasure, {company: req.user.company, state: 1}, db, currentPage, pageSize);

            });
            
            return sails.helpers.sendSuccess(ok)(
                'Message.FindSuccessfully', 
                { 
                    unitsOfMeasure: unitsOfMeasure.data
                },
                {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: Math.ceil(unitsOfMeasure.total / pageSize),
                    totalItems: unitsOfMeasure.total
                }
            );

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
