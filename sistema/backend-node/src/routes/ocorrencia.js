const express = require('express');
const router = express.Router();

const Ocorrencia = require("../models/Ocorrencia");

router.get("/listar", (request, response) => {
    Ocorrencia.findAll().then((ocorrencia) => {
            response.json(ocorrencia);
        });
});

router.post("/cadastrar", (request, response) => {
    Ocorrencia.create({
            componente: request.body.componente,
            situacao: request.body.situacao,
            dataHoraFim: request.body.dataHoraFim
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar ocorrencia: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Ocorrencia.update({
            componente: request.body.componente,
            situacao: request.body.situacao,
            dataHoraFim: request.body.dataHoraFim
            },
            {where: {'idOcorrencia': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar ocorrencia: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Ocorrencia.destroy({
            where: {'idOcorrencia': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar ocorrencia: "+erro)
        });
});

module.exports = router;