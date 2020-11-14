const db = require("../database/db");

const Ocorrencia = db.sequelize.define("ocorrencia", {
    idOcorrencia: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    componente: {
        type: db.Sequelize.STRING,
    },
    situacao: {
        type: db.Sequelize.STRING,
    },
    dataHoraFim: {
        type: db.Sequelize.DATE,
    },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "ocorrencia"
    }
);

module.exports = Ocorrencia;