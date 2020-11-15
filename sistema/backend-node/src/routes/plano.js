// const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const Plano = require("../models/Plano");

router.get("/listar", (request, response) => {
    Plano.findAll().then((plano) => {
            response.json(plano);
        });
});

router.post("/cadastrar", (request, response) => {
    Plano.create({
            tipo: request.body.tipo,
            quantidadeMaquinas: request.body.quantidadeMaquinas
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar plano: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Plano.update({
            tipo: request.body.tipo,
            quantidadeMaquinas: request.body.quantidadeMaquinas
            },
            {where: {'idPlano': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar plano: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Plano.destroy({
            where: {'idPlano': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar plano: "+erro)
        });
});

module.exports = router;