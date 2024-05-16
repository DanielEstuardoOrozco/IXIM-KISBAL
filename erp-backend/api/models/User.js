/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection of `user`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'SystemUsers',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdUser',
            autoIncrement: true,  
        },
        username: {
            type: 'string',
            required: true,
            unique: true,
            maxLength: 255,
            columnName: 'Username'
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 255,
            columnName: 'Email'
        },
        passwordHash: {
            type: 'string',
            required: true,
            maxLength: 255,
            columnName: 'PasswordHash'
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
        },

        /* Associations */
        company: {
            model: 'company',
            columnName: 'IdCompany'
        }
    },

    beforeCreate: (user, next) => {

        user.state = 1;
        SecurityService.hashPassword(user);
        next();

    },

    beforeUpdate: (user, next) => {

        SecurityService.hashPassword(user);
        next();

    },


    customToJSON: function () {

        return _.omit(this, [
            'passwordHash',
            'createdAt',
            'createdByUserId',
            'updatedAt',
            'updatedByUserId',
            'deletedAt',
            'deletedByUserId'
        ]);
        
    }
};
