var express = require('express');
var router = express.Router();

const ReservaController = require("../controllers/reservas-controller");

router.get("/", ReservaController.getAll);
router.get("/:id", ReservaController.getById);

module.exports = router;