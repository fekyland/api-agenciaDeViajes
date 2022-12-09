const { Hoteles , Reservas } = require ("../models");
const { Op } = require("sequelize");


const HotelController= {};

HotelController.getAll = async (req, res) => {
    try {
      const data = await Hoteles.findAll({
      include: [{model: Reservas, as: "reservas"}]
     
      });
      res.json(data);
    } catch (error) {
      res.status(500).send({
        message : "Some error ocurred whiles retrieving users."
      });
    }
  };

  /* ClienteController.getById = async (req, res) => {
        const id = req.params.id;
    
        try {
          const data = await Clientes.findByPk(id, {
             include: [{ model: Reservas, as: "reservas" }]
          });
    
          if (data) {
             res.json(data);
          } else {
             res.status(404).send({
                message: `Cannot find user with id=${id}`,
             });
          }
       } catch (error) {
          res.status(500).send({
             message: `Error retreiving user retrieving with id=${id}.`,
          });
       }

    };

    ClienteController.getByName = async (req, res) => {
      const name = req.params.name;
   
      try {
         const data = await Clientes.findAll({
            where: { Nombre : { [Op.like]: `%${name}%` } },
            include: [{ model: Reservas, as: "reservas" }],
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find user with name=${name}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving user retrieving with name=${name}.`,
         });
      }
   };*/

module.exports = HotelController; 
