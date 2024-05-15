/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
    *                                                                          *
    * Default policy for all controllers and actions, unless overridden.       *
    * (`true` allows public access)                                            *
    *                                                                          *
    ***************************************************************************/

    UserController: {
        'create':   ['Init'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    ProductTypeController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    UnitsOfMeasureController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    ProductController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    ProductPriceController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    CustomerController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

    WarehouseController: {
        'create':   ['Init', 'UserAuth'],
        'find':     ['Init', 'UserAuth'],
        'find-all': ['Init', 'UserAuth'],
        'update':   ['Init', 'UserAuth'],
        'delete':   ['Init', 'UserAuth'],
    },

};