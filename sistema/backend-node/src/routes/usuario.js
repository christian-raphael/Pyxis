const express = require('express');
const router = express.Router();

const Usuario = require("../models/Usuario");

router.get("/listar", (request, response) => {
    Usuario.findAll().then((usuario) => {
            response.json(usuario);
        });
});

router.post("/cadastrar", (request, response) => {
    Usuario.create({
            nome: request.body.nome,
            email: request.body.email,
            login: request.body.login,
            senha: request.body.senha,
            tipo: request.body.tipo,
            isAdmin: request.body.isAdmin,
            chaveAtivacao: request.body.chaveAtivacao,
            fkCallcenter: request.body.fkCallcenter
        })
        .then(() => {
            response.send("Cadastrado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao cadastrar usuário: "+erro)
        });
    
});

router.put("/atualizar/:id", (request, response) => {
    Usuario.update({
            nome: request.body.nome,
            email: request.body.email,
            login: request.body.login,
            senha: request.body.senha,
            tipo: request.body.tipo,
            isAdmin: request.body.isAdmin,
            chaveAtivacao: request.body.chaveAtivacao,
            fkCallcenter: request.body.fkCallcenter
            },
            {where: {'idUsuario': request.params.id}}
        ) 
        .then(() => {
            response.send("Atualizado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao atualizar usuário: "+erro)
        });
});

router.delete("/deletar/:id", (request, response) => {
    Usuario.destroy({
            where: {'idUsuario': request.params.id}
        })
        .then(() => {
            response.send("Deletado com sucesso")
        })
        .catch((erro) => {
            console.log("Falha ao deletar usuário: "+erro)
        });
});

module.exports = router;