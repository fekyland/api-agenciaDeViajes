const { Clientes , Reservas } = require ("../models");
const { Op } = require("sequelize");


const EmailController= {};

   EmailController.getByEmail = async (req, res) => {
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
               message: `Cannot find user with name=${email}`,
            });
         }
      } catch (error) {
         res.status(500).send({
            message: `Error retreiving user retrieving with name=${name}.`,
         });
      }
   };

module.exports = EmailController; 
