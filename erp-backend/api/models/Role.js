/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection of `role`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Roles',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdRole',
            autoIncrement: true,
        },
        roleName: {
            type: 'string',
            columnName: 'RoleName',
            required: true,
            maxLength: 255
        },
        description: {
            type: 'string',
            columnName: 'Description',
            allowNull: true
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
