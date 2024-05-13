const moment = require('moment');

module.exports = {
    
    friendlyName: 'Delete Units of Measure',

    description: 'Delete a unit of measure.',

    exits: {
        ok: {
            responseType: 'ok'
        },
        serverError: {
            responseType: 'serverError'
        }
    },

    fn: async ( _, exits, env) => {

        let { serverError, ok } = exits;
        let { req } = env;
        let sendError = sails.helpers.sendError;
        
        try {

            let deletedUnitOfMeasure;
            let data = {};
            let id = req.param("id");

            await sails.getDatastore().transaction(async (db) => {

                //Validate if exists resource
                await sails.helpers.validateExists(UnitsOfMeasure, {id: id, company: req.user.company, state: 1}, db, true);
                
                data.state = 0;

                data.deletedByUserId = req.user.id;

                data.deletedAt = moment().format(sails.config.constants.dateUtils.dbFormatDateTime);

                deletedUnitOfMeasure = await sails.helpers.repository.updateOne(UnitsOfMeasure, {id: id}, data, db);
            });
            
            return sails.helpers.sendSuccess(ok)('Message.DeleteSuccessfully', { unitsOfMeasure: deletedUnitOfMeasure.toJSON()});

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
