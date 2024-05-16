module.exports = {

    friendlyName: 'Create Inventory',

    description: 'Create a new inventory.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.inventory.create, data);
            
            let createdInventory;
            await sails.getDatastore().transaction(async (db) => {
                
                data.company = req.user.company;
                data.createdByUserId = req.user.id;

                await sails.helpers.validateUnique(Inventory, { product: data.product, warehouse: data.warehouse, unitOfMeasure: data.unitOfMeasure, company: data.company, state: 1 }, db);

                createdInventory = await sails.helpers.repository.create(Inventory, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { inventory: createdInventory.toJSON() });

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
