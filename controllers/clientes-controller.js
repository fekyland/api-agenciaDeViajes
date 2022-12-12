const { Clientes , Reservas , Hoteles } = require ("../models");
const { Op } = require("sequelize");


const ClienteController= {};

ClienteController.getAll = async (req, res) => {
    try {
      const data = await Clientes.findAll({
      include: [{model: Reservas, as: "reservas", include: {model: Hoteles ,as: "id_hotel_hotele"} }] //TODO: incluir importe
      });
      res.json(data);
    } catch (error) {
      res.status(500).send({
        message : "Some error ocurred whiles retrieving clientes."
      });
    }
  };

   ClienteController.getById = async (req, res) => {
        const id = req.params.id;
    
        try {
          const data = await Clientes.findByPk(id, {
            include: [{model: Reservas, as: "reservas" , include: {model: Hoteles ,as: "id_hotel_hotele"} }]
          });
    
          if (data) {
             res.json(data);
          } else {
             res.status(404).send({
                message: `Cannot find cliente with id = ${id}`,
             });
          }
       } catch (error) {
          res.status(500).send({
             message: `Error retreiving cliente retrieving with id = ${id}.`,
          });
       }

    };

    ClienteController.getByName = async (req, res) => {
      const name = req.params.name;
   
      try {
         const data = await Clientes.findAll({
            where: { Nombre : { [Op.like]: `%${name}%` } },
            include: [{model: Reservas, as: "reservas"}]
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
            message: `Error retreiving clientes retrieving with nombre=${name}.`,
         });
      }
   };

   ClienteController.getByEmail = async (req, res) => {
      const email = req.params.email;
   
      try {
         const data = await Clientes.findAll({
            where: { email : { [Op.like]: `%${email}%` } },
            include: [{ model: Reservas, as: "reservas"}],
            
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find user with email = ${email}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving email retrieving with email = ${email}.`,
         });
      }
   };

   ClienteController.getByFechaIn = async (req, res) => {
      const name = req.params.fechain;
   
      try {
         const data = await Reservas.findAll({
            where: { fecha_entrada : { [Op.like]: `%${name}%` }   },
            include: [{ model: Clientes, as: "id_cliente_cliente" }],
         
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find cliente with date = ${name}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving cliente retrieving with date = ${name}.`,
         });
      }
   };

   ClienteController.getByFechaOut = async (req, res) => {
      const name = req.params.fechaout;
   
      try {
         const data = await Reservas.findAll({
            where: { fecha_salida : { [Op.like]: `%${name}%`  }} ,
            include: [{ model: Clientes, as: "id_cliente_cliente" }],
            
         });
   
         if (data.length > 0) {
            res.json(data);
         } else {
            res.status(404).send({
               message: `Cannot find cliente with date = ${name}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving cliente retrieving with date = ${name}.`,
         });
      }
   };
   ClienteController.getByPhone = async (req, res) => {
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
               message: `Cannot find Cliente with telefono = ${telefono}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving cliente with telefono = ${telefono}.`,
         });
      }
   };
module.exports = ClienteController; 
