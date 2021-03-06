const routes = require("express").Router();
const ProjectController = require('./Controllers/ProjectController');
const BlockController = require('./Controllers/BlockController')
const AppointmentController = require('./Controllers/AppointmentController')


routes.get('/', ProjectController.index);
routes.get('/ShowOne/:id', ProjectController.showOne);
routes.post('/createProject', ProjectController.store);
routes.post('/updateProject/:id', ProjectController.update);
routes.delete('/deleteProject/:id', ProjectController.delete);

routes.get('/showBlocks/:uuid_projeto', BlockController.index);
routes.post('/createBlock', BlockController.store);
routes.post('/updateBlock/:id', BlockController.update);
routes.delete('/deleteBlock/:id', BlockController.delete);

routes.get('/showAppointments/:uuid_bloco', AppointmentController.index);
routes.post('/createAppointment', AppointmentController.store);
routes.post('/updateAppointment/:id', AppointmentController.update);
routes.delete('/deleteAppointment/:id', AppointmentController.delete);

module.exports = routes;