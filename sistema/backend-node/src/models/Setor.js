const db = require("../database/db");

const Setor = db.sequelize.define("setor", {
    idSetor: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    fkCallcenter: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "setor"
    }
);

module.exports = Setor;