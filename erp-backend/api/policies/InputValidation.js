/**
 * InputValidation
 * @description :: Policy to validate input parameters
 */

module.exports = (req, res, next) => {

    var sendError = sails.helpers.sendError(res.badRequest)("-", "-", "-", "-");
    var errors = [];

    if (!req.body.encabezado || !req.body.encabezado.CodigoServicio)
        errors.push({
            codigoError: sails.config.codes.errorCodes.undefinedSchema,
            descripcionError: req.i18n.__("Error.Message.MissingHeaderRequest")
        });

    if (!req.body.bloqueContenido)
        errors.push({
            codigoError: sails.config.codes.errorCodes.undefinedSchema,
            descripcionError: req.i18n.__("Error.Message.MissingContentRequest")
        });

    if (errors.length != 0)
        return sendError(errors);

    var bloqueContenido = req.body.bloqueContenido;

    try {
        var model = req.models[req.body.encabezado.CodigoServicio];
        var validatingModel = model ? model.with(bloqueContenido) : null;
        if (!validatingModel)
            errors.push({
                codigoError: sails.config.codes.errorCodes.undefinedSchema,
                descripcionError: req.i18n.__("Error.Message.InvalidMethodRequest")
            });
    } catch (err) {
        errors = err.problems.map(error => {
            return {
                codigoError: sails.config.codes.errorCodes.undefinedSchema,
                descripcionError: error
            }
        })
    }

    if (errors.length != 0)
        return sendError(errors);

    next();
};