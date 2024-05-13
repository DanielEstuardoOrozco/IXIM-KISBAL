/**
 * Init
 * @description :: Policy to init values
 */

const { v4: uuidv4 } = require('uuid');

module.exports = (req, res, next) => {
    
    req.traceId = uuidv4();

    next();
};

