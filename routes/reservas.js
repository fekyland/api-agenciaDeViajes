var express = require('express');
var router = express.Router();

const ReservaController = require("../controllers/reservas-controller");
//const reservas = require('../models/reservas');


router.get("/", ReservaController.getAll);

router.get("/:id", ReservaController.getById);

//router.get("/numero/:number", ReservaController.getByNumber);


module.exports = router;