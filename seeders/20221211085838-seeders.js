'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     
     
     await queryInterface.bulkInsert('clientes', [{
      
      
      nombre: 'John Doe',
      id_dni: '29.3000.160',
      telefono:'4324525',
      email:"pepepepe@gmail.com"

      }], {});
      await queryInterface.bulkInsert('reservas', [{
      
        id_reserva:4,        
        fecha_entrada:"1900-01-03",     
        fecha_salida: "900-01-04",      
        id_hotel:2,          
        id_cliente: "29,000,3030E",       
        comprobante_hotel :"Y87234892",
        importe: "5000" 
  
        }], {});
        await queryInterface.bulkInsert('hoteles', [{
      
          id_hotel:4,          
          nombre_hotel: "la cigueña hotel",      
          direccion: "calle n100",
          pais: "Argentina",
          provincia: "catamarca",
          ciudad: "santa maria"
          }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
