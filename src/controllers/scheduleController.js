import scheduleService from '../services/scheduleService';
import path from "path";

const getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/home.html'));
}

const getUserDashboard = async (req, res) => {
    const id = req.params.userId;
    let message = await scheduleService.getUserSchedules(id);
    res.render('userDashboard.ejs', { schedule_data: message });
}

const countStatuses = (schedules) => {
    return schedules.reduce((acc, schedule) => {
        if (schedule.isConfirmed) acc.confirmed++;
        acc[schedule.status]++;
        return acc;
    }, { confirmed: 0, scheduled: 0, completed: 0, canceled: 0 });
};

const getAdminDashboard = async (req, res) => {
    let schedules = await scheduleService.getUserSchedules();
    const counts = countStatuses(schedules);
    res.render("adminDashboard.ejs", { all_schedule_data: schedules, status_counts: counts });
}

const getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/login.html'));
}

const getTestUser = (req, res) => {
    const id = req.params.userId;
    console.log("check id:", id);
}
const handleCreateNewSchedule = async (req, res) => {
    let message = await scheduleService.createNewSchedule(req.body)
    return res.status(200).json(message);
}

const handleConfirmUserSchedule = async (req, res) => {
    const scheduleId = req.body.scheduleId;

    let message = await scheduleService.adminConfirmUserSchedule(scheduleId);
    return res.status(200).json(message);
}

const handleUpdateScheduleStatus = async (req, res) => {
    const scheduleId = req.body.id;
    const newStatus = req.body.status;
    const isConfirmed = req.body.isConfirmed;
    // console.log("check controller: ", { scheduleId, newStatus, isConfirmed });
    let message = await scheduleService.updateScheduleStatus(scheduleId, newStatus, isConfirmed);
    return res.status(200).json(message);
}
const handleGetUserSchedule = async (req, res) => {
    const userId = req.body.userId;
    let message = await scheduleService.getUserSchedules(userId);
    return res.status(200).json(message);
}

const handleGetAllUserSchedules = async (req, res) => {
    let message = await scheduleService.getUserSchedules();
    return res.status(200).json(message);
}
module.exports = {
    getHomePage,
    getUserDashboard,
    getAdminDashboard,
    getLogin,
    handleCreateNewSchedule,
    handleConfirmUserSchedule,
    handleUpdateScheduleStatus,
    handleGetUserSchedule,
    handleGetAllUserSchedules,
    getTestUser
}