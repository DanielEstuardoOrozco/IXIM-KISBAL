module.exports = {
    
    friendlyName: 'Find Provider',

    description: 'Find a provider.',

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
            
            let provider = {};

            await sails.getDatastore().transaction(async (db) => {
                
                provider = await sails.helpers.repository.findOne(Provider, {id: req.param("id"), company: req.user.company, state: 1}, db, true);

            });
            
            return sails.helpers.sendSuccess(ok)('Message.FindSuccessfully', { provider: provider.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
