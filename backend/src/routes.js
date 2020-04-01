const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const ongControllers = require('./controllers/OngControllers');
const incidentControllers = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');



const routes = express.Router();
routes.get('/ongs', ongControllers.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongControllers.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),}).unknown(),
}), profileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,incidentControllers.index);
routes.post('/incidents', incidentControllers.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}) , incidentControllers.delete);

routes.post('/sessions', sessionController.create);

module.exports = routes;