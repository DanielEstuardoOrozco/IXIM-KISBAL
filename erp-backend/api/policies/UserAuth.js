/**
 * UserAuth
 * @description :: Policy to authenticate and inject user in req via JSON Web Token
 */

const passport = require('passport');

module.exports = (req, res, next) => {
    
    passport.authenticate('user-jwt', function (error, user, info) {

        try {
            if (error) {
                sails.helpers.loggingError(error, req.traceId);
                return res.serverError({
                    status: sails.config.constants.status.ERROR,
                    error: {
                        code: sails.config.constants.error.INTERNAL_AUTH_USER_ERROR,
                        message: sails.config.constants.message.INTERNAL_AUTH_USER_ERROR,
                        traceId: req.traceId,
                        documentation_url: sails.helpers.getErrorDocumentationUrl(sails.config.constants.error.INTERNAL_AUTH_USER_ERROR),
                        details: []
                    }
                });
            }

            if (!user){
                sails.helpers.loggingError(`${sails.config.constants.error.USER_NOT_FOUND}-${sails.config.constants.errorMessage.USER_NOT_FOUND}`, req.traceId);
                return res.unauthorized({
                    status: sails.config.constants.status.ERROR,
                    error: {
                        code: sails.config.constants.error.INVALID_TOKEN,
                        message: sails.config.constants.message.INVALID_TOKEN,
                        traceId: req.traceId,
                        documentation_url: sails.helpers.getErrorDocumentationUrl(sails.config.constants.error.INVALID_TOKEN),
                        details: []
                    }
                });
            }

            req.user = user;

            next();
        } catch (err) {
            sails.helpers.loggingError(err, req.traceId);
            return res.serverError({
                status: sails.config.constants.status.ERROR,
                error: {
                    code: sails.config.constants.error.INTERNAL_ERROR,
                    message: sails.config.constants.message.INTERNAL_ERROR,
                    traceId: req.traceId,
                    documentation_url: sails.helpers.getErrorDocumentationUrl(sails.config.constants.error.INTERNAL_ERROR),
                    details: []
                }
            });
        }

    })(req, res);
};
