const { Model, DataTypes } = require("sequelize");

class Genero extends Model {
    static init(conexao) {
        super.init({
            nome: DataTypes.STRING,
            publico_alvo: DataTypes.STRING,
            tamanho_medio: DataTypes.STRING,
            animes: DataTypes.STRING,
            subgeneros: DataTypes.STRING,
        }, { sequelize: conexao, freezeTableName: true, tableName: "generos" });
    }
}

module.exports = Genero;