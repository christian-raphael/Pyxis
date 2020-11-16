//Carregando modulos
    const express = require("express");
    const bodyParser = require("body-parser");
    const cors = require("cors");

    const callcenterRoutes = require("./routes/callcenter");
    const planoRoutes = require("./routes/plano");
    const usuarioRoutes = require("./routes/usuario");
    const setorRoutes = require("./routes/setor");
    const maquinaRoutes = require("./routes/maquina");
    const ocorrenciaRoutes = require("./routes/ocorrencia");

    const app = express();

//Configurações
    //Body Parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

    //CORS
        app.use(cors());

//Rotas
    app.use("/callcenter", callcenterRoutes);
    app.use("/plano", planoRoutes);
    app.use("/usuario", usuarioRoutes);
    app.use("/setor", setorRoutes);
    app.use("/maquina", maquinaRoutes);
    app.use("/ocorrencia", ocorrenciaRoutes);

//Outros
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log("Servidor iniciado na porta "+PORT);
    });