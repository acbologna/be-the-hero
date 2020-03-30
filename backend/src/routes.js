const express = require('express');
const ongControllers = require('./controllers/OngControllers');
const incidentControllers = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');


const routes = express.Router();
routes.get('/ongs', ongControllers.index);
routes.post('/ongs', ongControllers.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentControllers.index);
routes.post('/incidents', incidentControllers.create);
routes.delete('/incidents/:id', incidentControllers.delete);

routes.post('/sessions', sessionController.create);

module.exports = routes;