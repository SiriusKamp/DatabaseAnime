const sequelize = require("sequelize");

const dbconfig = require("./dbconfig.js");

const Usuario = require("../models/Usuario.js");

const conexao = new sequelize(dbconfig);

const Genero = require("../models/Genero");

Usuario.init(conexao);
Genero.init(conexao);

module.exports = conexao;