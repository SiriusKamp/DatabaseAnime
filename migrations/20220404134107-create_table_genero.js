"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("generos", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            publico_alvo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tamanho_medio: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            animes: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            subgeneros: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("generos");
    },
};