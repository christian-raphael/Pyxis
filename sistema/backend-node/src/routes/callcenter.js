const express = require('express');
const router = express.Router();

const Callcenter = require("../models/Callcenter");

router.get("/listar", (request, response) => {
    Callcenter.findAll().then((callcenter) => {
            response.json(callcenter);
        });
});

router.post("/cadastrar", (request, response) => {
    Callcenter.create({
            razaoSocial: request.body.razaoSocial,
            nomeFantasia: request.body.nomeFantasia,
            cnpj: request.body.cnpj,
            logradouro: request.body.logradouro,
            cep: request.body.cep,
            bairro: request.body.bairro,
            numero: request.body.numero,
            nomeResponsavel: request.body.nomeResponsavel,
            emailResponsavel: request.body.emailResponsavel,
            fkPlano: request.body.fkPlano
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar Callcenter: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Callcenter.update({
                razaoSocial: request.body.razaoSocial,
                nomeFantasia: request.body.nomeFantasia,
                cnpj: request.body.cnpj,
                logradouro: request.body.logradouro,
                cep: request.body.cep,
                bairro: request.body.bairro,
                numero: request.body.numero,
                nomeResponsavel: request.body.nomeResponsavel,
                emailResponsavel: request.body.emailResponsavel,
                fkPlano: request.body.fkPlano
            },
            {where: {'idCallcenter': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar Callcenter: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Callcenter.destroy({
            where: {'idCallcenter': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar Callcenter: "+erro)
        });
});

module.exports = router;