const { Clientes , Reservas } = require ("../models");
const { Op } = require("sequelize");


const FechaOutController= {};

    FechaOutController.getByFechaOut = async (req, res) => {
      const name = req.params.fechaout;
   
      try {
         const data = await Reservas.findAll({
            where: { fecha_salida : { [Op.like]: `%${name}%` , attributes: { exclude: ['importe'] }} },
            include: [{ model: Clientes, as: "id_cliente_cliente" }],
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find user with date = ${name}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving user retrieving with date = ${name}.`,
         });
      }
   };

module.exports = FechaOutController; 
