// const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const Maquina = require("../models/Maquina");

router.get("/listar", (request, response) => {
    Maquina.findAll().then((maquina) => {
            response.json(maquina);
        });
});

router.post("/cadastrar", (request, response) => {
    Maquina.create({
            nome: request.body.nome,
            modelo: request.body.modelo,
            fabricante: request.body.fabricante,
            status: request.body.status,
            fkSetor: request.body.fkSetor,
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar maquina: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Plano.update({
            nome: request.body.nome,
            modelo: request.body.modelo,
            fabricante: request.body.fabricante,
            status: request.body.status,
            fkSetor: request.body.fkSetor,
            },
            {where: {'idMaquina': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar maquina: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Plano.destroy({
            where: {'idMaquina': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar maquina: "+erro)
        });
});

module.exports = router;