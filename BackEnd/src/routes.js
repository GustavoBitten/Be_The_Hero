const express = require('express')
const {celebrate, Segments, Joi} = require('celebrate')

const OngController = require("./controllers/OngController")
const incidentController = require("./controllers/incidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")

const route = express.Router()

route.get('/ongs', OngController.index )

route.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })


}) ,OngController.create);

route.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),

    }).unknown()

}),ProfileController.index)
route.post('/sessions',SessionController.create)



route.get('/incident', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:Joi.number(),
    })
}),incidentController.index );


route.post('/incident', incidentController.create);
route.delete('/incident/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentController.delet)


module.exports = route;

