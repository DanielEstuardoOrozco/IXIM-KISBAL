module.exports = {
    
    friendlyName: 'Update System User',

    description: 'Update a system user.',

    inputs: {
        data: {
            type: 'ref',
            required: true
        }
    },

    exits: {
        ok: {
            responseType: 'ok'
        },
        serverError: {
            responseType: 'serverError'
        }
    },

    fn: async ({ data }, exits, env) => {

        let { serverError, ok } = exits;
        let { req } = env;
        let sendError = sails.helpers.sendError;
        
        try {
            
            await sails.helpers.validateModel(sails.helpers.model.user.update, data);
            
            let updatedUser;
            let id = req.param("id");
            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(User, {id: id, company: req.user.company, state: 1}, db, true);
                
                await sails.helpers.validateUnique(User, {email: data.email, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                await sails.helpers.validateUnique(User, {username: data.username, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                data.updatedByUserId = req.user.id;

                updatedUser = await sails.helpers.repository.updateOne(User, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.UpdateSuccessfully', { user: updatedUser.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
