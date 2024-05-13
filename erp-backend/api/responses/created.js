/**
 * created.js
 *
 * 201 (Created) Response
 * Successful creation occurred (via either POST or PUT).
 * Set the Location header to contain a link 
 * to the newly-created resource (on POST).
 * Response body content may or may not be present.
 *
 * Example usage:
 * ```
 *     return res.created();
 *     // -or-
 *     return res.created(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'created'
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

module.exports = function created(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 201;

  // If no data was provided, use res.sendStatus()
  if (optionalData === undefined) {
    sails.log.info('Ran custom response: res.created()');
    return res.sendStatus(statusCodeToSet);
  }
  // Else if the provided data is an Error instance, if it has
  // a customToJSON() function, then always run it and use it as the
  // response body to send.  Otherwise, send down its `.stack`,
  // except in production use res.sendStatus().
  else if (_.isError(optionalData)) {
    sails.log.info('Custom response `res.created()` called with an Error:', optionalData);

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
