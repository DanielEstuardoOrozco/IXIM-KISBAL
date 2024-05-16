module.exports = {
    
    friendlyName: 'Find All Provider',

    description: 'Find all provider.',

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
            
            let providers = {};
            let pageSize = req.pageSize;
            let currentPage = req.currentPage;

            await sails.getDatastore().transaction(async (db) => {
                
                providers = await sails.helpers.repository.find(Provider, {company: req.user.company, state: 1}, db, currentPage, pageSize);

            });
            
            return sails.helpers.sendSuccess(ok)(
                'Message.FindSuccessfully', 
                { 
                    provider: providers.data
                },
                {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: Math.ceil(providers.total / pageSize),
                    totalItems: providers.total
                }
            );

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
