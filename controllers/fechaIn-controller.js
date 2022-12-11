const { Clientes , Reservas } = require ("../models");
const { Op } = require("sequelize");


const FechaInController= {};

    FechaInController.getByFechaIn = async (req, res) => {
      const name = req.params.fechain;
   
      try {
         const data = await Reservas.findAll({
            where: { fecha_entrada : { [Op.like]: `%${name}%` } ,attributes: { exclude: ['importe'] } },
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

module.exports = FechaInController; 
