var express = require('express');
var router = express.Router();

const HotelController = require("../controllers/hoteles-controller");

router.get("/:hotel", HotelController.getByHotel);



module.exports = router;