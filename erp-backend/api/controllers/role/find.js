module.exports = {
    
    friendlyName: 'Find Role',

    description: 'Find a role.',

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
            
            let role = {};

            await sails.getDatastore().transaction(async (db) => {
                
                role = await sails.helpers.repository.findOne(Role, {id: req.param("id"), company: req.user.company, state: 1}, db, true);

            });
            
            return sails.helpers.sendSuccess(ok)('Message.FindSuccessfully', { role: role.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
