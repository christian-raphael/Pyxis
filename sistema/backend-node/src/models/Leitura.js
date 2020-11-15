const db = require("../database/db");

const Leitura = db.sequelize.define("leitura", {
    idLeitura: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usoCpu: {
        type: db.Sequelize.DOUBLE,
    },
    usoMemoria: {
        type: db.Sequelize.DOUBLE,
    },
    usoDisco: {
        type: db.Sequelize.DOUBLE,
    },
    velocidadeRede: {
        type: db.Sequelize.DOUBLE,
    },
    dataHoraLeitura: {
        type: db.Sequelize.DATE,
    },
    fkMaquina: {
        type: db.Sequelize.INTEGER,
    },
    fkOcorrencia: {
        type: db.Sequelize.INTEGER,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "leitura"
    }
);

module.exports = Leitura;