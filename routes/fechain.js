var express = require('express');
var router = express.Router();

const FechaInController = require('../controllers/fechaIn-controller');

router.get("/:fechain", FechaInController.getByFechaIn);

module.exports = router;