module.exports = {

    friendlyName: 'Update Units of Measure',

    description: 'Update a unit of measure.',

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
            
            await sails.helpers.validateModel(sails.helpers.model.unitsOfMeasure.update, data);
            
            let updatedUnitsOfMeasure;
            let id = req.param("id");
            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(UnitsOfMeasure, {id: id, company: req.user.company, state: 1}, db, true);
                
                await sails.helpers.validateUnique(UnitsOfMeasure, {uomCode: data.uomCode, company: req.user.company, id: {'!=': [id]}, state: 1}, db);

                data.updatedByUserId = req.user.id;

                updatedUnitsOfMeasure = await sails.helpers.repository.updateOne(UnitsOfMeasure, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.UpdateSuccessfully', { unitsOfMeasure: updatedUnitsOfMeasure.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
