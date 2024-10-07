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

const getAdminDashboard = async (req, res) => {
    let message = await scheduleService.getUserSchedules(id);
    res.render("adminDashboard.ejs", {all_schedule_data: message});
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
    console.log('scheduleId check:', scheduleId);

    let message = await scheduleService.adminConfirmUserSchedule(scheduleId);
    return res.status(200).json(message);
}

const handleUpdateScheduleStatus = async (req, res) => {
    const scheduleId = req.body.scheduleId;
    const newStatus = req.body.newStatus;
    let message = await scheduleService.updateScheduleStatus(scheduleId, newStatus);
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