const db = require("../database/db");

const Callcenter = db.sequelize.define("callcenter", {
    idCallcenter: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    razaoSocial: {
        type: db.Sequelize.STRING,
    },
    nomeFantasia: {
        type: db.Sequelize.STRING
    },
    cnpj: {
        type: db.Sequelize.STRING,
    },
    logradouro: {
        type: db.Sequelize.STRING,
    },
    cep: {
        type: db.Sequelize.STRING,
    },
    bairro: {
        type: db.Sequelize.STRING,
    },
    numero: {
        type: db.Sequelize.STRING,
    },
    nomeResponsavel: {
        type: db.Sequelize.STRING,
    },
    emailResponsavel: {
        type: db.Sequelize.STRING,
    },
    fkPlano: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "callcenter"
    }
);

module.exports = Callcenter;