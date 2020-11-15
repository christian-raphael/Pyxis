const db = require("../database/db");

const Usuario = db.sequelize.define("usuario", {
    idUsuario: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    login: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    },
    tipo: {
        type: db.Sequelize.BOOLEAN,
    },
    isAdmin: {
        type: db.Sequelize.BOOLEAN,
    },
    chaveAtivacao: {
        type: db.Sequelize.STRING,
    },
    fkCallcenter: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "usuario"
    }
);

module.exports = Usuario;