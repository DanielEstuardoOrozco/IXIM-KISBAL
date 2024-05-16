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
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    ProductTypeController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    UnitsOfMeasureController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    ProductController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    ProductPriceController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    CustomerController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    WarehouseController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    InventoryController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    ProviderController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

    RoleController: {
        'create':   ['Init', 'UserAuth', 'ValidateCreate'],
        'find':     ['Init', 'UserAuth', 'ValidateFind'],
        'find-all': ['Init', 'UserAuth', 'ValidateFindAll'],
        'update':   ['Init', 'UserAuth', 'ValidateUpdate'],
        'delete':   ['Init', 'UserAuth', 'ValidateDelete'],
    },

};