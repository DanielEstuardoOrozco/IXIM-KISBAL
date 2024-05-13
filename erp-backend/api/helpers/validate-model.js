module.exports = {


    friendlyName: 'Validate Input Model Schema',


    description: 'Method to validate input model schema',

    inputs: {
        model: {
            description: 'Model object',
            type: 'ref',
            required: true,
        },
        data: {
            description: 'Data object',
            type: 'ref',
            required: true,
        }
    },


    fn: async ({ model, data }, exits) => {
        let details = [];
        try {
            await model.with(data);
            return exits.success();
        } catch (error) {
            details = error.problems.map(error => {
                return error
            });
        }
        if(details.length > 0){
            throw {
                code: sails.config.constants.error.MISSING_INVALID_PARAMS,
                message: 'Error.Message.MissingInvalidParams',
                details: details
            };
        }
    }


};

