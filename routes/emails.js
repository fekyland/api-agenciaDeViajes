var express = require('express');
var router = express.Router();

const EmailController = require("../controllers/email-controller");
//const clientes = require('../models/clientes');


router.get("/clientes/email/:email", EmailController.getByEmail);

module.exports = router;