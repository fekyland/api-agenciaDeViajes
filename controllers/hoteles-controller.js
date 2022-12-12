const { Hoteles , Reservas } = require ("../models");
const { Op } = require("sequelize");

const HotelController= {};

HotelController.getAll = async (req, res) => {
   try {
     const data = await Hoteles.findAll({
     
     });
     res.json(data);
   } catch (error) {
     res.status(500).send({
       message : "Some error ocurred whiles retrieving users."
     });
   }
 };
    HotelController.getByHotel = async (req, res) => {
      const nombre = req.params.hotel;
   
      try {
         const data = await Hoteles.findAll({
            where: { nombre_hotel : { [Op.like]: `%${nombre}%` } },
            include: [{ model: Reservas, as: "reservas" },

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
