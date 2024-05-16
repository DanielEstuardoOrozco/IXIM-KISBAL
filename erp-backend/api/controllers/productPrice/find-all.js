module.exports = {
    
    friendlyName: 'Find All Product Price',

    description: 'Find all product price.',

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
            
            let productPrices = {};
            let pageSize = req.pageSize;
            let currentPage = req.currentPage;

            await sails.getDatastore().transaction(async (db) => {
                
                productPrices = await sails.helpers.repository.find(ProductPrice, {company: req.user.company, state: 1}, db, currentPage, pageSize);

            });
            
            return sails.helpers.sendSuccess(ok)(
                'Message.FindSuccessfully', 
                { 
                    productPrice: productPrices.data
                },
                {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: Math.ceil(productPrices.total / pageSize),
                    totalItems: productPrices.total
                }
            );

        } catch (error) {

            sails.helpers.loggingError(error, req.traceId);
            return sendError(serverError)(error.raw && error?.raw.code ? error.raw : { code: sails.config.constants.error.INTERNAL_ERROR, message: 'Error.Message.InternalError' })

        }

    }

};
