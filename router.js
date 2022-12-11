const router = require("express").Router();             //se definen obejtos
const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const hotelesRouter = require('./routes/hoteles');
const reservasRouter = require('./routes/reservas');
const emailsRouter = require('./routes/emails');
const telefonoRouter = require('./routes/telefonos');
const fechainRouter = require('./routes/fechain');
const fechaoutRouter = require('./routes/fechaout');


router.use('/', indexRouter);                           //se definen las rutas
router.use('/clientes', clientesRouter);
router.use('/hoteles', hotelesRouter);
router.use('/reservas', reservasRouter);
router.use('/fechain', fechainRouter);
router.use('/fechaout',fechaoutRouter);
router.use('/telefono', telefonoRouter);
router.use('/emails', emailsRouter);





module.exports = router;