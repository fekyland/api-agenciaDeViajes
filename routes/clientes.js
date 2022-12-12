var express = require('express');
var router = express.Router();

const ClienteController = require("../controllers/clientes-controller");


router.get("/", ClienteController.getAll);
router.get("/id/:id", ClienteController.getById);
router.get("/nombre/:name", ClienteController.getByName);
router.get("/email/:email", ClienteController.getByEmail);
router.get("/fechain/:fechain", ClienteController.getByFechaIn);
router.get("/fechaout/:fechaout", ClienteController.getByFechaOut);
router.get("/telefono/:telefono", ClienteController.getByPhone);

module.exports = router;