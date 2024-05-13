module.exports = {

    friendlyName: 'Update Product Price',

    description: 'Update a product price.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.productPrice.update, data);
            
            let updatedProductPrice;
            let id = req.param("id");
            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(ProductPrice, {id: id, company: req.user.company, state: 1}, db, true);
                
                await sails.helpers.validateUnique(ProductPrice, {product: data.product, unitOfMeasure: data.unitOfMeasure, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                data.updatedByUserId = req.user.id;

                updatedProductPrice = await sails.helpers.repository.updateOne(ProductPrice, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.UpdateSuccessfully', { productPrice: updatedProductPrice.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
