/**
 * Warehouse.js
 *
 * @description :: A model definition represents a database table/collection of `warehouse`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Warehouses',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdWarehouse',
            autoIncrement: true,
        },
        warehouseName: {
            type: 'string',
            columnName: 'WarehouseName',
            required: true,
            maxLength: 255
        },
        phoneNumber: {
            type: 'string',
            columnName: 'PhoneNumber',
            allowNull: true,
            maxLength: 50
        },
        location: {
            type: 'string',
            columnName: 'Location',
            allowNull: true
        },
        address: {
            type: 'string',
            columnName: 'Address',
            allowNull: true,
            maxLength: 255
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
        employeeResponsible: {
            model: 'employee',
            columnName: 'IdEmployeeResponsible',
            required: true
        },
    },

    beforeCreate: (warehouse, next) => {

        warehouse.state = 1;
        warehouse.updatedByUserId = warehouse.createdByUserId;
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
