module.exports = {

    friendlyName: 'Create Product',

    description: 'Create a new product.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.product.create, data);
            
            let createdProduct;
            await sails.getDatastore().transaction(async (db) => {
                
                data.company = req.user.company;
                data.createdByUserId = req.user.id;

                //await sails.helpers.validateUnique(Product, {name: data.name, company: data.company, state: 1}, db);

                createdProduct = await sails.helpers.repository.create(Product, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { product: createdProduct.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
