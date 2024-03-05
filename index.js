var express = require("express");
var app = express();
const usuarioRouter = require("./routes/UsuarioRoute");
const generoRouter = require("./routes/GeneroRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

require("./config/database.js");

app.use("/usuario", usuarioRouter);
app.use("/genero", generoRouter);

app.listen("3000", () => {
    console.log("Conexão iniciada na porta 3000");
});

// genero - id - nome - publico alvo - tamanho medio - animes - subgeneros
// anime -id - nome - genero - episodios - filmes - data lançamento - semanal - finalizado - temporada - foto