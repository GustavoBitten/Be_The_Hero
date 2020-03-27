const express = require('express')

const OngController = require("./controllers/OngController")
const incidentController = require("./controllers/incidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")

const route = express.Router()

route.get('/ongs', OngController.index )
route.post('/ongs', OngController.create);

route.get('/profile',ProfileController.index)
route.post('/sessions',SessionController.create)



route.get('/incident', incidentController.index );
route.post('/incident', incidentController.create);
route.delete('/incident/:id',incidentController.delet)


module.exports = route;

