/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection of `documents`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Companies',
    
    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            required: true,
            columnName: 'IdCompany'
        },
        companyName: {
            type: 'string',
            required: true,
            maxLength: 255,
            columnName: 'CompanyName'
        },
        address: {
            type: 'string',
            columnType: 'text',
            allowNull: true,
            columnName: 'Address'
        },
        companyInfo: {
            type: 'string',
            columnType: 'text',
            allowNull: true,
            columnName: 'CompanyInfo'
        },
        image: {
            type: 'ref',
            columnType: 'blob',
            columnName: 'Image'
        },
        createdAt: {
            type: 'ref',
            columnType: 'datetime',
            autoCreatedAt: true,
            columnName: 'CreatedAt'
        },
        createdByUserId: {
            type: 'number',
            allowNull: true,
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
            allowNull: true,
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
        }
    }

};
