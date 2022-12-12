const { Clientes , Reservas } = require ("../models");
const { Op } = require("sequelize");


const TelefonoController= {};

    TelefonoController.getByPhone = async (req, res) => {
      const telefono = req.params.telefono;
   
      try {
         const data = await Clientes.findAll({
            where: { Telefono : { [Op.like]: `%${telefono}%` } },
            include: [{ model: Reservas, as: "reservas" }],
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find user with telefono = ${telefono}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving user retrieving with name=${telefono}.`,
         });
      }
   };

module.exports = TelefonoController; 
