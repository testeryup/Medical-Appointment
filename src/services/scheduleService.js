import { raw } from 'express';
import facility from '../models/facility';
import db from '../models/index';
import { where } from 'sequelize';
import { resolveInclude } from 'ejs';
const moment = require('moment')

const createNewSchedule = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.UserSchedule.create({
                userId: data.userId,
                facilityId: data.facilityId,
                appointmentDate: data.appointmentDate,
                appointmentTime: data.appointmentTime,
                status: data.status,
                symptom: data.symptom
            })

            resolve({
                errCode: 0,
                errMessage: 'Create schedule success!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

const adminConfirmUserSchedule = (scheduleId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let schedule = await db.UserSchedule.findOne({
                where: { id: scheduleId },
                raw: false
            });

            if (!schedule) {
                resolve({
                    errCode: 2,
                    errMessage: 'Schedule not found!'
                });
            } else {
                schedule.isConfirmed = true;
                await schedule.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Schedule confirmed successfully!'
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const updateScheduleStatus = (scheduleId, newStatus, isConfirmed) => {
    return new Promise(async (resolve, reject) => {
        const allowedStatuses = ['scheduled', 'completed', 'canceled'];
        if (!allowedStatuses.includes(newStatus)) {
            resolve({
                errCode: 3,
                errMessage: 'Invalid status!'
            });
            return;
        }
        try {
            let schedule = await db.UserSchedule.findOne({
                where: { id: scheduleId },
                raw: false
            });

            if (!schedule) {
                resolve({
                    errCode: 2,
                    errMessage: 'Schedule not found!'
                });
            } else {
                schedule.status = newStatus;
                schedule.isConfirmed = isConfirmed;
                await schedule.save();
                resolve({
                    errCode: 0,
                    errMessage: `Update schedule status successfully!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}


const { UserSchedule, User, Facility } = db;

const getUserSchedules = async (userId = null) => {
    try {
        const whereClause = userId ? { userId: userId } : {};

        const schedules = await UserSchedule.findAll({
            attributes: [
                'id',
                'appointmentDate',
                'appointmentTime',
                'symptom',
                'isConfirmed',
                'status'
            ],
            include: [
                {
                    model: User,
                    attributes: ['email', 'firstName', 'lastName', 'phonenumber']
                },
                {
                    model: Facility,
                    attributes: ['name']
                }
            ],
            where: whereClause,
            raw: true
        });

        const formattedSchedules = schedules.map(schedule => ({
            id: schedule.id,
            appointmentDate: moment(schedule.appointmentDate).format('YYYY-MM-DD'),
            appointmentTime: moment(schedule.appointmentTime, 'HH:mm:ss').format('HH:mm'),
            symptom: schedule.symptom,
            isConfirmed: schedule.isConfirmed,
            status: schedule['status'],
            userEmail: schedule['User.email'],
            userFirstName: schedule['User.firstName'],
            userLastName: schedule['User.lastName'],
            userPhonenumber: schedule['User.phonenumber'],
            facilityName: schedule['Facility.name']
        }));

        return formattedSchedules;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    createNewSchedule,
    adminConfirmUserSchedule,
    updateScheduleStatus,
    getUserSchedules
}