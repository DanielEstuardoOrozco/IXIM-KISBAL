module.exports = {

    friendlyName: 'Create Product Price',

    description: 'Create a new product Price.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.productPrice.create, data);
            
            let createdProductPrice;
            await sails.getDatastore().transaction(async (db) => {
                
                data.company = req.user.company;
                data.createdByUserId = req.user.id;

                await sails.helpers.validateUnique(ProductPrice, {product: data.product, unitOfMeasure: data.unitOfMeasure, company: data.company, state: 1}, db);

                createdProductPrice = await sails.helpers.repository.create(ProductPrice, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { productPrice: createdProductPrice.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
