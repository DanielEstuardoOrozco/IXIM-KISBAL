/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection of `product`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Products',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdProduct',
            autoIncrement: true,
        },
        productName: {
            type: 'string',
            columnName: 'ProductName',
            required: true,
            maxLength: 255
        },
        productDescription: {
            type: 'string',
            columnName: 'ProductDescription',
            required: true,
            maxLength: 500
        },
        barCode: {
            type: 'string',
            columnName: 'BarCode',
            allowNull: true,
            maxLength: 255
        },
        qrCode: {
            type: 'string',
            columnName: 'QRCode',
            allowNull: true,
            maxLength: 255
        },
        price: {
            type: 'number',
            columnType: 'float',
            columnName: 'Price',
            required: true
        },
        productImage: {
            type: 'ref',
            columnType: 'blob',
            columnName: 'ProductImage',
        },
        productAditionalInfo: {
            type: 'string',
            columnName: 'ProductAditionalInfo',
            required: true,
            maxLength: 255
        },
        productionDate: {
            type: 'ref',
            columnType: 'date',
            columnName: 'ProductionDate',
        },
        expirationDate: {
            type: 'ref',
            columnType: 'date',
            columnName: 'ExpirationDate',
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
        productType: {
            model: 'productType',
            required: true,
            columnName: 'IdProductType'
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
