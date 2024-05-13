module.exports = {

    friendlyName: 'Update Product',

    description: 'Update a product.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.product.update, data);
            
            let updatedProduct;
            let id = req.param("id");
            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(Product, {id: id, company: req.user.company, state: 1}, db, true);
                
                //await sails.helpers.validateUnique(Product, {name: data.name, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                data.updatedByUserId = req.user.id;

                updatedProduct = await sails.helpers.repository.updateOne(Product, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.UpdateSuccessfully', { product: updatedProduct.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
