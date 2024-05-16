module.exports = {

    friendlyName: 'Create Product Type',

    description: 'Create a new product type.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.productType.create, data);
            
            let createdProductType;
            await sails.getDatastore().transaction(async (db) => {
                
                data.company = req.user.company;
                data.createdByUserId = req.user.id;

                await sails.helpers.validateUnique(ProductType, { name: data.name, company: data.company, state: 1 }, db);

                createdProductType = await sails.helpers.repository.create(ProductType, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { productType: createdProductType.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
