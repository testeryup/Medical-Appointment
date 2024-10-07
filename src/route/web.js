import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import scheduleController from "../controllers/scheduleController";


let router = express.Router();

let initWebRoutes = (app) => {
    // router.get('/', homeController.getHomePage);
    router.get('/', scheduleController.getHomePage);
    router.get('/dashboard/user', scheduleController.getUserDashboard)
    router.get('/dashboard/admin', scheduleController.getAdminDashboard)
    router.get('/login', scheduleController.getLogin);

    router.post('/api/user-create-new-schedule', scheduleController.handleCreateNewSchedule);
    router.post('/api/confirm-schedule', scheduleController.handleConfirmUserSchedule)
    router.post('/api/update-schedule-status', scheduleController.handleUpdateScheduleStatus)
    router.get('/api/get-user-schedule', scheduleController.handleGetUserSchedule)
    router.get('/api/get-all-user-schedule', scheduleController.handleGetAllUserSchedules)

    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.get('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    return app.use("/", router)
}

module.exports = initWebRoutes;