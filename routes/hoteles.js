var express = require('express');
var router = express.Router();

const HotelController = require("../controllers/hoteles-controller");

router.get("/", HotelController.getAll);
router.get("/nombre/:hotel", HotelController.getByHotel);



module.exports = router;