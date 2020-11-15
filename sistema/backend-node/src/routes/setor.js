// const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const Setor = require("../models/Setor");

router.get("/listar", (request, response) => {
    Setor.findAll().then((setor) => {
            response.json(setor);
        });
});

router.post("/cadastrar", (request, response) => {
    Setor.create({
            nome: request.body.nome,
            fkCallcenter: request.body.fkCallcenter
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar setor: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Setor.update({
            nome: request.body.nome,
            fkCallcenter: request.body.fkCallcenter
            },
            {where: {'idSetor': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar setor: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Setor.destroy({
            where: {'idSetor': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar setor: "+erro)
        });
});

module.exports = router;