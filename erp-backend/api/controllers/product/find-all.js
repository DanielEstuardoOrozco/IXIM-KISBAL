module.exports = {
    
    friendlyName: 'Find All Product',

    description: 'Find all product.',

    exits: {
        ok: {
            responseType: 'ok'
        },
        serverError: {
            responseType: 'serverError'
        }
    },

    fn: async ( _ , exits, env) => {

        let { serverError, ok } = exits;
        let { req } = env;
        let sendError = sails.helpers.sendError;
        
        try {
            
            let products = {};
            let pageSize = req.param("pageSize");
            let currentPage = req.param("currentPage");

            await sails.getDatastore().transaction(async (db) => {
                
                products = await sails.helpers.repository.find(Product, {company: req.user.company, state: 1}, db, currentPage, pageSize);

            });
            
            return sails.helpers.sendSuccess(ok)(
                'Message.FindSuccessfully', 
                { 
                    product: products.data
                },
                {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: Math.ceil(products.total / pageSize),
                    totalItems: products.total
                }
            );

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
