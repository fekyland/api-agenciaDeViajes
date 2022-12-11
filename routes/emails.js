var express = require('express');
var router = express.Router();

const EmailController = require("../controllers/email-controller");

router.get("/:email", EmailController.getByEmail);

module.exports = router;