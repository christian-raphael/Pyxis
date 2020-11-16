const express = require('express');
const router = express.Router();

const Leitura = require("../models/Leitura");

router.get("/listar", (request, response) => {
    Leitura.findAll().then((leitura) => {
            response.json(leitura);
        });
});

router.post("/cadastrar", (request, response) => {
    Leitura.create({
            usoCpu: request.body.usoCpu,
            usoMemoria: request.body.usoMemoria,
            usoDisco: request.body.usoDisco,
            velocidadeRede: request.body.velocidadeRede,
            dataHoraLeitura: request.body.dataHoraLeitura,
            fkMaquina: request.body.fkMaquina,            
            fkOcorrencia: request.body.fkOcorrencia                        
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar leitura: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Leitura.update({
            usoCpu: request.body.usoCpu,
            usoMemoria: request.body.usoMemoria,
            usoDisco: request.body.usoDisco,
            velocidadeRede: request.body.velocidadeRede,
            dataHoraLeitura: request.body.dataHoraLeitura,
            fkMaquina: request.body.fkMaquina,            
            fkOcorrencia: request.body.fkOcorrencia
            },
            {where: {'idLeitura': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar leitura: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Leitura.destroy({
            where: {'idLeitura': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar leitura: "+erro)
        });
});

module.exports = router;