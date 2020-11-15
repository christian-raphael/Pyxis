const db = require("../database/db");

const Plano = db.sequelize.define("plano", {
    idPlano: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: {
        type: db.Sequelize.STRING,
    },
    quantidadeMaquinas: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "plano"
    }
);

module.exports = Plano;