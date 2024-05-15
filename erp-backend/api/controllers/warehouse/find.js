module.exports = {
    
    friendlyName: 'Find Warehouse',

    description: 'Find a Warehouse.',

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
            
            let warehouse = {};

            await sails.getDatastore().transaction(async (db) => {
                
                warehouse = await sails.helpers.repository.findOne(Warehouse, {id: req.param("id"), company: req.user.company, state: 1}, db, true);

            });
            
            return sails.helpers.sendSuccess(ok)('Message.FindSuccessfully', { warehouse: warehouse.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
