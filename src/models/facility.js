'use strict';
const { BOOLEAN } = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Facility extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Facility.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Facility',
    });
    Facility.associate = function(models) {
        Facility.hasMany(models.UserSchedule, { foreignKey: 'facilityId' });
    };
    return Facility;
};