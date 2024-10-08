'use strict';
const { BOOLEAN } = require('sequelize');
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserSchedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    UserSchedule.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users', // Name of the related table
                key: 'id' // Primary key of the related table
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        facilityId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Facility',
                key: 'id'
            }
        },
        appointmentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        appointmentTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
            defaultValue: 'scheduled'
        },
        symptom: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isConfirmed: {
            type: BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }



    }, {
        sequelize,
        modelName: 'UserSchedule',
    });
    UserSchedule.associate = function (models) {
        UserSchedule.belongsTo(models.User, { foreignKey: 'userId' });
        UserSchedule.belongsTo(models.Facility, { foreignKey: 'facilityId' });
    };
    return UserSchedule;
};