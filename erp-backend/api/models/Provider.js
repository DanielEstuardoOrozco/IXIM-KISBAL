/**
 * Provider.js
 *
 * @description :: A model definition represents a database table/collection of `provider`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Providers',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdProvider',
            autoIncrement: true,
        },
        providerName: {
            type: 'string',
            columnName: 'ProviderName',
            required: true,
            maxLength: 255
        },
        contactInfo: {
            type: 'string',
            columnName: 'ContactInfo',
            allowNull: true
        },
        phoneNumber: {
            type: 'string',
            columnName: 'PhoneNumber',
            required: true,
            maxLength: 50
        },
        email: {
            type: 'string',
            columnName: 'Email',
            required: true,
            isEmail: true,
            maxLength: 255
        },
        website: {
            type: 'string',
            columnName: 'WebSite',
            required: true,
            maxLength: 255
        },
        linkedIn: {
            type: 'string',
            columnName: 'LinkedIn',
            required: true,
            maxLength: 255
        },
        logo: {
            type: 'ref',
            columnType: 'blob',
            columnName: 'Logo',
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
    },

    beforeCreate: (customer, next) => {

        customer.state = 1;
        customer.updatedByUserId = customer.createdByUserId;
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
