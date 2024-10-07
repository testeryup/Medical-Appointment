'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('UserSchedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // Name of the related table
                    key: 'id' // Primary key of the related table
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            facilityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Facilities',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            appointmentDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            appointmentTime: {
                type: Sequelize.TIME,
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM('scheduled', 'completed', 'canceled'),
                defaultValue: 'scheduled'
            },
            symptom: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            isConfirmed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('UserSchedules');
    }
};
