var express = require('express');
var router = express.Router();

const HotelController = require("../controllers/hoteles-controller");
const hoteles = require('../models/hoteles');

router.get("/", HotelController.getAll);

//router.get("/:id", HotelController.getById);

//router.get("/nombres/:name", HotelController.getByName);



module.exports = router;