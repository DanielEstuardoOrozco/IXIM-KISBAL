/**
 * UnitOfMeasure.js
 *
 * @description :: A model definition represents a database table/collection of `unitOfMeasure`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'UnitsOfMeasure',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdUoM',
            autoIncrement: true
        },
        uomCode: {
            type: 'string',
            columnName: 'UoMCode',
            maxLength: 50,
            required: true
        },
        uomDescription: {
            type: 'string',
            columnName: 'UoMDescription',
            maxLength: 255,
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

    beforeCreate: (unitOfMeasure, next) => {

        unitOfMeasure.state = 1;
        unitOfMeasure.updatedByUserId = unitOfMeasure.createdByUserId;
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
