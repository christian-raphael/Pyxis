const db = require("../database/db");

const Maquina = db.sequelize.define("maquina", {
    idMaquina: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    modelo: {
        type: db.Sequelize.STRING,
    },
    fabricante: {
        type: db.Sequelize.STRING,
    },
    status: {
        type: db.Sequelize.BOOLEAN,
    },
    fkSetor: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "maquina"
    }
);

module.exports = Maquina;