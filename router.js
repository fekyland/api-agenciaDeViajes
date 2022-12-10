const router = require("express").Router();
const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const hotelesRouter = require('./routes/hoteles');
const reservasRouter = require('./routes/reservas');
//const emailsRouter = require('./routes/emails');


router.use('/', indexRouter);                           //se definen las rutas
router.use('/clientes', clientesRouter);
router.use('/clientes/hoteles', hotelesRouter);
router.use('/clientes/reservas', reservasRouter);
//router.use('/clientes/fechain', fechainRouter);
//router.use('/clientes/fechaout',fechaoutRouter);
//router.use('/clientes/telefono', telfonoRouter);
//router.use('/clientes/email', reservasRouter);
//router.use('/clientes/hotelticket', ticketRouter);
//router.use('/clientes/email', emailsRouter);



module.exports = router;