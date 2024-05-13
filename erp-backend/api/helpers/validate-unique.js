module.exports = {

    friendlyName: 'Validate unique',

    description: 'Validates if criteria already exists.',

    inputs: {
        Model: {
            description: 'Model',
            type: 'ref',
            required: true
        },
        Criteria: {
            description: 'Critera',
            type: 'ref',
            required: true
        },
        DB: {
            description: 'DB',
            type: 'ref',
            required: true
        }
    },

    fn: async ({Model, Criteria, DB}, exits) => {
        let resource = await sails.helpers.repository.findOne(Model, Criteria, DB);
        if (resource){
            let listUniqueCriteria = [];
            Object.keys(Criteria).forEach(function(key) {
                listUniqueCriteria.push(key);
            });
            let uniqueCriteria = listUniqueCriteria.join(', ');
            throw { 
                code: sails.config.constants.error.UNIQUE, 
                message: 'Error.Message.UniqueORM', 
                details: [
                    await sails.helpers.stringUtils.replace(
                        sails.config.constants.errorMessage["Error.Message.ExistingResource"]
                        , [uniqueCriteria]
                    )
                ]
            };
        }
        return exits.success();
    }
};

