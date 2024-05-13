module.exports = {
    
    friendlyName: 'Find All System User',

    description: 'Find all System User.',

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
            
            let users = {};
            let pageSize = req.param("pageSize");
            let currentPage = req.param("currentPage");

            await sails.getDatastore().transaction(async (db) => {
                
                users = await sails.helpers.repository.find(User, {company: req.user.company, state: 1}, db, currentPage, pageSize);

            });
            
            return sails.helpers.sendSuccess(ok)(
                'Message.FindSuccessfully', 
                { 
                    user: users.data
                },
                {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: Math.ceil(users.total / pageSize),
                    totalItems: users.total
                }
            );

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
