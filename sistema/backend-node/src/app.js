//Carregando modulos
    const express = require("express");
    const bodyParser = require("body-parser");

    const callcenterRoutes = require("./routes/callcenter");

    const app = express();

//Configurações
    //Body Parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

//Rotas
    app.use("/callcenter", callcenterRoutes);

//Outros
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log("Servidor iniciado na porta "+PORT);
    });