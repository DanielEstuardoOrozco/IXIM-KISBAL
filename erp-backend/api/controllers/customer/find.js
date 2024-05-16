module.exports = {
    
    friendlyName: 'Find Customer',

    description: 'Find a customer.',

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
            
            let customer = {};

            await sails.getDatastore().transaction(async (db) => {
                
                customer = await sails.helpers.repository.findOne(Customer, {id: req.param("id"), company: req.user.company, state: 1}, db, true);

            });
            
            return sails.helpers.sendSuccess(ok)('Message.FindSuccessfully', { customer: customer.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
