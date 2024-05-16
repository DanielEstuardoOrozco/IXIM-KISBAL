module.exports = {

    friendlyName: 'Create System User',

    description: 'Create a new system user.',

    inputs: {
        data: {
            type: 'ref',
            required: true
        }
    },

    exits: {
        created: {
            responseType: 'created'
        },
        serverError: {
            responseType: 'serverError'
        }
    },

    fn: async ({ data }, exits, env) => {

        let { serverError, created } = exits;
        let { req } = env;
        let sendError = sails.helpers.sendError;
        
        try {
            
            await sails.helpers.validateModel(sails.helpers.model.user.create, data);
            
            let createdUser;
            await sails.getDatastore().transaction(async (db) => {
                
                await sails.helpers.validateUnique(User, { email: data.email, company: data.company, state: 1 }, db);

                await sails.helpers.validateUnique(User, { username: data.username, company: data.company, state: 1 }, db);

                createdUser = await sails.helpers.repository.create(User, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { user: createdUser.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }
    
};
