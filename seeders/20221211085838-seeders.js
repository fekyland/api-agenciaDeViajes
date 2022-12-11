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
