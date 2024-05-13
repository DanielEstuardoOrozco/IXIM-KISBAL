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
        },
        ErrorIfNotExists: {
            description: 'Throw error not if exists',
            type: 'boolean',
            required: false
        }
    },

    fn: async ({Model, Criteria, DB, ErrorIfNotExists}, exits) => {
        let resource = await sails.helpers.repository.findOne(Model, Criteria, DB);
        if (ErrorIfNotExists && !resource){
            throw { 
                code: sails.config.constants.error.RESOURCE_NOT_FOUND, 
                message: 'Error.Message.ResourceNotFound'
            };
        }
        return exits.success(resource);
    }
};

