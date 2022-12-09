const { Reservas, Clientes  } = require ("../models");
const { Op } = require("sequelize");


const ReservaController= {};

ReservaController.getAll = async (req, res) => {
    try {
      const data = await Reservas.findAll({
      include: [{model: Clientes , as: "id_cliente_cliente"}]
     
      });
      res.json(data);
    } catch (error) {
      res.status(500).send({
        message : "Some error ocurred whiles retrieving hoteles."
      });
    }
  };

 ReservaController.getById = async (req, res) => {
        const id = req.params.id;
    
        try {
          const data = await Reservas.findByPk(id, {
             include: [{ model: Clientes, as: "id_cliente_cliente" }]
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

    /* ReservaController.getByNumber = async (req, res) => {
      const name = req.params.name;
   
      try {
         const data = await Reservas.findAll({
            where: { id_reserva: `${name}` },
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
   }*/

module.exports = ReservaController; 