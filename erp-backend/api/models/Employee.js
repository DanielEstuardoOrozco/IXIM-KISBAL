/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection of `employee`.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Employees',

    primaryKey: 'id',

    attributes: {
        id: {
            type: 'number',
            columnName: 'IdEmployee',
            autoIncrement: true,
        },
    },

    beforeCreate: (employee, next) => {

        employee.state = 1;
        employee.updatedByUserId = employee.createdByUserId;
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
