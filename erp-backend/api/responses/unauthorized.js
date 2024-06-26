/**
 * unauthorized.js
 *
 * 401 (Unauthorized) Response
 * Similar to 403 Forbidden.
 * Specifically for authentication failed or not yet provided.
 *
 * Example usage:
 * ```
 *     return res.unauthorized();
 *     // -or-
 *     return res.unauthorized(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'unauthorized'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function unauthorized(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 401;
  var statusToSet = "UNAUTHENTICATED";

  // If no data was provided, use res.sendStatus() and set default data.
  if (optionalData === undefined) {
    sails.log.info('Ran 401 response: res.unauthorized()');
    optionalData = {
      code: sails.config.codes.error.entityNotFound,
      message: "Request had invalid credentials.",
      status: statusToSet
    }
    return res.sendStatus(statusCodeToSet);
  }
  // Else if the provided data is an Error instance, if it has
  // a customToJSON() function, then always run it and use it as the
  // response body to send.  Otherwise, send down its `.stack`,
  // except in production use res.sendStatus().
  else if (_.isError(optionalData)) {
    sails.log.info('Custom response `res.unauthorized()` called with an Error:', optionalData);

    // If the error doesn't have a custom .customToJSON(), use its `stack` instead--
    // otherwise res.json() would turn it into an empty dictionary.
    // (If this is production, don't send a response body at all.)
    if (!_.isFunction(optionalData.customToJSON)) {
      if (process.env.NODE_ENV === 'production') {
        return res.sendStatus(statusCodeToSet);
      }
      else {
        return res.status(statusCodeToSet).send(optionalData.stack);
      }
    }
  }
  // Set status code and send response data.
  else {
    delete optionalData.level;
    delete optionalData.label;
    delete optionalData.timestamp;
    return res.status(statusCodeToSet).send(optionalData);
  }

};
