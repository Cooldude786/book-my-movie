'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(250)
      },
      phone: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(15)
      },
      profile_img: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};