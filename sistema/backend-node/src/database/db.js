const Sequelize = require("Sequelize");

//Configurando banco de dados mysql
    const sequelize = new Sequelize("calltech", "admpyxis", "#Gfgrupo1", {
        host: "serverpyxis.database.windows.net",
        dialect: "mssql",
        // pool: {
        //     max: 5,
        //     min: 0,
        //     idle: 10000
        //   },
        //   dialectOptions: {
        //     encrypt: true
        //   }
    });

//Testando conexão
    sequelize.authenticate()
        .then(() => {
            console.log("Conectado ao banco com sucesso.");
        })
        .catch((erro) => {
            console.log("Falha ao se conectar ao banco: "+erro);
        });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}