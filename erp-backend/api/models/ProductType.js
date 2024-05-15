/**
 * ProductType.js
 *
 * @description :: A model definition represents a database table/collection of `documents`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'ProductTypes',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdProductType',
            autoIncrement: true,
        },
        name: {
            type: 'string',
            maxLength: 100,
            columnName: 'Name'
        },
        description: {
            type: 'string',
            maxLength: 100,
            columnName: 'Description'
        },
        createdAt: {
            type: 'ref',
            columnType: 'datetime',
            autoCreatedAt: true,
            columnName: 'CreatedAt'
        },
        createdByUserId: {
            type: 'number',
            columnName: 'CreatedByUserId'
        },
        updatedAt: {
            type: 'ref',
            columnType: 'datetime',
            autoUpdatedAt: true,
            columnName: 'UpdatedAt'
        },
        updatedByUserId: {
            type: 'number',
            columnName: 'UpdatedByUserId'
        },
        deletedAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'DeletedAt'
        },
        deletedByUserId: {
            type: 'number',
            allowNull: true,
            columnName: 'DeletedByUserId'
        },
        state: {
            type: 'number',
            allowNull: true,
            columnName: 'State'
        },

        /* Associations */
        company: {
            model: 'company',
            required: true,
            columnName: 'IdCompany'
        },
    },

    beforeCreate: (productType, next) => {

        productType.state = 1;
        productType.updatedByUserId = productType.createdByUserId;
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
