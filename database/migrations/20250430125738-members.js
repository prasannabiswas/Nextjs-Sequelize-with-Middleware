"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("members", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      country_code: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      profile_image_url: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: "no-profile.png",
      },
      gender: {
        type: Sequelize.ENUM("male", "female", "other", "prefer_not_to_say"),
        allowNull: false,
        defaultValue: "prefer_not_to_say",
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      pincode: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      is_online: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      last_seen: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("members");
  },
};
