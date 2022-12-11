const { Hoteles , Reservas , Clientes } = require ("../models");
const { Op } = require("sequelize");

const HotelController= {};

    HotelController.getByHotel = async (req, res) => {
      const nombre = req.params.hotel;
   
      try {
         const data = await Hoteles.findAll({
            where: { nombre_hotel : { [Op.like]: `%${nombre}%` } },
            include: [{ model: Reservas, as: "reservas" , attributes: { exclude: ['importe'] } },

         ],
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find user with name=${nombre}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving user retrieving with name=${nombre}.`,
         });
      }
   };

module.exports = HotelController; 
