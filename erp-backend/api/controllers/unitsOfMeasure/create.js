module.exports = {

    friendlyName: 'Create Units of Measure',

    description: 'Create a new units of measure.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.unitsOfMeasure.create, data);
            
            let createdUnitsOfMeasure;
            await sails.getDatastore().transaction(async (db) => {
                
                data.company = req.user.company;
                data.createdByUserId = req.user.id;

                await sails.helpers.validateUnique(UnitsOfMeasure, {uomCode: data.uomCode, company: data.company, state: 1}, db);

                createdUnitsOfMeasure = await sails.helpers.repository.create(UnitsOfMeasure, data, db);
            });
            
            return sails.helpers.sendSuccess(created)('Message.CreatedSuccessfully', { unitsOfMeasure: createdUnitsOfMeasure.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
