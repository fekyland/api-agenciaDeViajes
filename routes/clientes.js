var express = require('express');
var router = express.Router();

const ClienteController = require("../controllers/clientes-controller");


router.get("/", ClienteController.getAll);
router.get("/id/:id", ClienteController.getById);
router.get("/nombres/:name", ClienteController.getByName);

module.exports = router;