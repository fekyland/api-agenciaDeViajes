const { Reservas, Clientes, Hoteles  } = require ("../models");
const { Op } = require("sequelize");


const ReservaController= {};

ReservaController.getAll = async (req, res) => {
    try {
      const data = await Reservas.findAll({
      include: [{model: Clientes , as: "id_cliente_cliente"},
                {model: Hoteles , as: "id_hotel_hotele"}],
      attributes: { exclude: ['importe'] }   
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
             include: [{ model: Clientes, as: "id_cliente_cliente" }],
             attributes: { exclude: ['importe'] }
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

module.exports = ReservaController; 