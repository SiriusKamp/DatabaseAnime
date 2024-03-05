const { Op } = require("sequelize");
const Usuario = require("../models/Usuario.js");

async function abreAdd(req, res) {
    res.render("usuario/add.ejs", {});
}
async function add(req, res) {
    const { nome, email, senha } = req.body;
    const foto = req.file.filename;
    console.log(req.file);
    await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
        res.redirect("/usuario");
    });
}

async function abreEdt(req, res) {
    let usuario = await Usuario.findByPk(req.params.id);
    res.render("usuario/edt.ejs", { usuario: usuario });
}
async function edt(req, res) {
    let usuario = await Usuario.findByPk(req.params.id);
    usuario.nome = req.body.nome;
    usuario.senha = req.body.senha;
    usuario.email = req.body.email;

    if (req.body.foto != "") {
        usuario.foto = req.file.filename;
    }

    await usuario.save();
    res.redirect("/usuario");
}

async function list(req, res) {
    let usuarios = await Usuario.findAll();
    res.render("usuario/index.ejs", { Usuarios: usuarios });
}

async function listFiltro(req, res) {
    let pesquisar = req.body.pesquisar;
    let usuarios = await Usuario.findAll({
        where: {
            nome: {
                [Op.iLike]: pesquisar,
            },
        },
    });
    res.render("usuario/index.ejs", { Usuarios: usuarios });
}

async function del(req, res) {
    let usuario = await Usuario.findByPk(req.params.id);
    await usuario.destroy();
    res.redirect("/usuario");
}
module.exports = { abreAdd, add, list, listFiltro, edt, abreEdt, del };