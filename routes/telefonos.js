var express = require('express');
var router = express.Router();

const TelefonoController = require("../controllers/telefono-controller");

router.get("/:telefono", TelefonoController.getByPhone);

module.exports = router;