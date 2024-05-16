/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
    *                                                                          *
    * Make the view located at `views/homepage.ejs` your home page.            *
    *                                                                          *
    * (Alternatively, remove this and add an `index.html` file in your         *
    * `assets` directory)                                                      *
    *                                                                          *
    ***************************************************************************/

    //'/': { view: 'pages/homepage' },


    /***************************************************************************
    *                                                                          *
    * More custom routes here...                                               *
    * (See https://sailsjs.com/config/routes for examples.)                    *
    *                                                                          *
    * If a request to a URL doesn't match any of the routes in this file, it   *
    * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
    * not match any of those, it is matched against static assets.             *
    *                                                                          *
    ***************************************************************************/

    "POST /auth": "user.auth",
    "GET /status": "user.health",

    // /* Access Routes */
    // 'POST /access': 'access/create',
    // 'GET /access/:id?': 'access/find',
    // 'PATCH /access/:id': 'access/update',
    // 'DELETE /access/:id': 'access/delete',

    /* User Routes */
    'POST /user':       'user/create',
    'GET /user':        'user/find-all',
    'GET /user/:id?':   'user/find',
    'PUT /user/:id':    'user/update',
    'DELETE /user/:id': 'user/delete',

    /* ProductType Routes */
    'POST /productType':        'productType/create',
    'GET /productType':         'productType/find-all',
    'GET /productType/:id':     'productType/find',
    'PUT /productType/:id':     'productType/update',
    'DELETE /productType/:id':  'productType/delete',

    /* UnitsOfMeasure Routes */
    'POST /unitsOfMeasure':        'unitsOfMeasure/create',
    'GET /unitsOfMeasure':         'unitsOfMeasure/find-all',
    'GET /unitsOfMeasure/:id':     'unitsOfMeasure/find',
    'PUT /unitsOfMeasure/:id':     'unitsOfMeasure/update',
    'DELETE /unitsOfMeasure/:id':  'unitsOfMeasure/delete',

    /* Product Routes */
    'POST /product':        'product/create',
    'GET /product':         'product/find-all',
    'GET /product/:id':     'product/find',
    'PUT /product/:id':     'product/update',
    'DELETE /product/:id':  'product/delete',

    /* Product Price Routes */
    'POST /productPrice':        'productPrice/create',
    'GET /productPrice':         'productPrice/find-all',
    'GET /productPrice/:id':     'productPrice/find',
    'PUT /productPrice/:id':     'productPrice/update',
    'DELETE /productPrice/:id':  'productPrice/delete',

    /* Customer Routes */
    'POST /customer':        'customer/create',
    'GET /customer':         'customer/find-all',
    'GET /customer/:id':     'customer/find',
    'PUT /customer/:id':     'customer/update',
    'DELETE /customer/:id':  'customer/delete',

    /* Warehouse Routes */
    'POST /warehouse':        'warehouse/create',
    'GET /warehouse':         'warehouse/find-all',
    'GET /warehouse/:id':     'warehouse/find',
    'PUT /warehouse/:id':     'warehouse/update',
    'DELETE /warehouse/:id':  'warehouse/delete',

    /* Inventory Routes */
    'POST /inventory':        'inventory/create',
    'GET /inventory':         'inventory/find-all',
    'GET /inventory/:id':     'inventory/find',
    'PUT /inventory/:id':     'inventory/update',
    'DELETE /inventory/:id':  'inventory/delete',

    /* Provider Routes */
    'POST /provider':        'provider/create',
    'GET /provider':         'provider/find-all',
    'GET /provider/:id':     'provider/find',
    'PUT /provider/:id':     'provider/update',
    'DELETE /provider/:id':  'provider/delete',
};
