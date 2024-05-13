module.exports = {

    friendlyName: 'Update Product type',

    description: 'Update a product type.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.productType.update, data);
            
            let updatedProductType;
            let id = req.param("id");
            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(ProductType, {id: id, company: req.user.company, state: 1}, db, true);
                
                await sails.helpers.validateUnique(ProductType, {name: data.name, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                data.updatedByUserId = req.user.id;

                updatedProductType = await sails.helpers.repository.updateOne(ProductType, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.UpdateSuccessfully', { productType: updatedProductType.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
