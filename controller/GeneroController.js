const { Op } = require("sequelize");
const Genero = require("../models/Genero.js");

async function abreAdd(req, res) {
    res.render("genero/add.ejs", {});
}
async function add(req, res) {
    const { nome, tamanho_medio, publico_alvo, animes, subgeneros } = req.body;
    await Genero.create({
        nome,
        tamanho_medio,
        publico_alvo,
        animes,
        subgeneros,
    }).then((genero) => {
        res.redirect("/genero");
    });
}

async function abreEdt(req, res) {
    let genero = await Genero.findByPk(req.params.id);
    res.render("genero/edt.ejs", { genero: genero });
}
async function edt(req, res) {
    let genero = await Genero.findByPk(req.params.id);
    genero.nome = req.body.nome;
    genero.publico_alvo = req.body.publico_alvo;
    genero.tamanho_medio = req.body.tamanho_medio;
    genero.animes = req.body.animes;
    genero.subgeneros = req.body.subgeneros;

    await genero.save();
    res.redirect("/genero");
}

async function list(req, res) {
    let generos = await Genero.findAll();
    res.render("genero/index.ejs", { Generos: generos });
}

async function listFiltro(req, res) {
    let pesquisar = req.body.pesquisar;
    let generos = await Genero.findAll({
        where: {
            nome: {
                [Op.iLike]: pesquisar,
            },
        },
    });
    res.render("genero/index.ejs", { Generos: generos });
}

async function del(req, res) {
    let genero = await Genero.findByPk(req.params.id);
    await genero.destroy();
    res.redirect("/genero");
}
module.exports = { abreAdd, add, list, listFiltro, edt, abreEdt, del };