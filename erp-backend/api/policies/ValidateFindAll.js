/**
 * ValidateFindAll
 * @description :: Policy to validate values for `find-all` action
 */

module.exports = (req, res, next) => {
    
    req.pageSize = req.param("pageSize") || 10;
    req.currentPage = req.param("currentPage") || 1;
    
    next();
};

