/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection of `customer`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Customers',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdCustomer',
            autoIncrement: true,
        },
        customerName: {
            type: 'string',
            columnName: 'CustomerName',
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
            allowNull: true,
            maxLength: 50
        },
        email: {
            type: 'string',
            columnName: 'Email',
            allowNull: true,
            isEmail: true,
            maxLength: 255
        },
        aditionalInfo: {
            type: 'string',
            columnName: 'AditionalInfo',
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
