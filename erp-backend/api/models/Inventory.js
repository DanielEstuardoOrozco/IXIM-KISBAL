/**
 * Inventory.js
 *
 * @description :: A model definition represents a database table/collection of `documents`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Inventory',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdInventory',
            autoIncrement: true,
        }, 
        quantity: {
            type: 'number',
            columnName: 'Quantity',
            required: true
        },
        createdAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'CreatedAt',
            autoCreatedAt: true,
        },
        createdByUserId: {
            type: 'number',
            columnName: 'CreatedByUserId',
            allowNull: true
        },
        updatedAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'UpdatedAt',
            autoUpdatedAt: true,
        },
        updatedByUserId: {
            type: 'number',
            columnName: 'UpdatedByUserId',
            allowNull: true
        },
        deletedAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'DeletedAt',
        },
        deletedByUserId: {
            type: 'number',
            columnName: 'DeletedByUserId',
            allowNull: true
        },
        state: {
            type: 'number',
            columnName: 'State',
            allowNull: true
        },

        /* Associations */
        company: {
            model: 'company',
            required: true,
            columnName: 'IdCompany'
        },
        product: {
            model: 'product',
            required: true,
            columnName: 'IdProduct'
        },
        warehouse: {
            model: 'warehouse',
            required: true,
            columnName: 'IdWarehouse'
        },
        unitOfMeasure: {
            model: 'unitsOfMeasure',
            required: true,
            columnName: 'IdUoM'
        },
    },

    beforeCreate: (inventory, next) => {

        inventory.state = 1;
        inventory.updatedByUserId = inventory.createdByUserId;
        next();

    },

    customToJSON: function () {

        return _.omit(this, [
            'createdAt',
            'createdByUserId',
            'updatedAt',
            'updatedByUserId',
            'deletedAt',
            'deletedByUserId'
        ]);

    }

};
