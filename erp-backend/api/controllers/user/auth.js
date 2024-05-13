const passport = require('passport');
const moment = require('moment');

module.exports = {


    friendlyName: 'Auth entity',


    description: 'API designed to authenticate the entity credentials to consume the others services along services.',


    exits: {
        ok: {
            responseType: 'ok'
        },
        unauthorized: {
            responseType: 'unauthorized',
            description: 'Unauthorized Request'
        },
        serverError: {
            responseType: 'serverError',
            description: 'Server Error Response'
        }
    },


    fn: async ( _, exits, env) => {
        var { serverError, unauthorized, ok } = exits;
        var { req, res } = env;

        if (req.headers && !req.headers.authorization) {
            const auth = `${req.body.username}:${req.body.password}`;
            const buff = Buffer.from(auth, 'utf-8');
            req.headers.authorization = `Basic ${buff.toString('base64')}`  
        }

        passport.authenticate('basic', (err, entity, info) => {
            
            if (err) {
                sails.log.error(err.message, req.traceId);
                return serverError({
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

            if (!entity){
                sails.log.error(`${sails.config.constants.error.USER_NOT_FOUND}-${sails.config.constants.errorMessage.USER_NOT_FOUND}`, req.traceId);
                return unauthorized({
                    status: sails.config.constants.status.ERROR,
                    error: {
                        code: sails.config.constants.error.USER_NOT_FOUND,
                        message: sails.config.constants.message.USER_NOT_FOUND,
                        traceId: req.traceId,
                        documentation_url: sails.helpers.getErrorDocumentationUrl(sails.config.constants.error.USER_NOT_FOUND),
                        details: []
                    }
                });
            }

            return sails.helpers.sendSuccess(ok)(
                'Message.AuthenticatedSuccessfully', 
                { 
                    access_token: SecurityService.createToken(entity),
                    token_type: "bearer",
                    expire_in: process.env.JWT_EXPIRES_IN,
                    userName: entity.Nombre,
                    issued: moment().format(),
                    expires: moment().add(process.env.JWT_EXPIRES_IN, 'm').format()
                }
            );
        })(req, res);
    }
};
