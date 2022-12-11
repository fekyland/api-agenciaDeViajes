var express = require('express');
var router = express.Router();

const FechaOutController = require("../controllers/fechaOut-controller");

router.get("/:fechaout", FechaOutController.getByFechaOut);

module.exports = router;