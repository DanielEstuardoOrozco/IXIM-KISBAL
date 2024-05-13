/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection of `documents`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'ProductPrices',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdPrice',
            autoIncrement: true,
        },
        price: {
            type: 'number',
            columnType: 'float',
            columnName: 'Price',
            required: true
        },
        priceType: {
            type: 'string',
            columnName: 'PriceType',
            allowNull: true,
            maxLength: 50
        },
        effectiveDate: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'EffectiveDate',
        },
        expiryDate: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'ExpiryDate',
        },
        createdAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'CreatedAt',
            autoCreatedAt: true,
        },
        createdByUserId: {
            type: 'number',
            columnName: 'CreatedByUserId'
        },
        updatedAt: {
            type: 'ref',
            columnType: 'datetime',
            columnName: 'UpdatedAt',
            autoUpdatedAt: true,
        },
        updatedByUserId: {
            type: 'number',
            columnName: 'UpdatedByUserId'
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
        unitOfMeasure: {
            model: 'unitsOfMeasure',
            required: true,
            columnName: 'IdUoM'
        },
    },

    beforeCreate: (product, next) => {

        product.state = 1;
        product.updatedByUserId = product.createdByUserId;
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
