const express = require('express')

const OngController = require("./controllers/OngController")
const incidentController = require("./controllers/incidentController")

const route = express.Router()

route.get('/ongs', OngController.index )
route.post('/ongs', OngController.create);

route.get('/incident', incidentController.index )
route.post('/incident', incidentController.create);


module.exports = route;

