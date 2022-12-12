const router = require("express").Router();             //se definen obejtos
const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const hotelesRouter = require('./routes/hoteles');
const reservasRouter = require('./routes/reservas');



router.use('/', indexRouter);                           //se definen las rutas
router.use('/clientes', clientesRouter);
router.use('/hoteles', hotelesRouter);
router.use('/reservas', reservasRouter);


module.exports = router;