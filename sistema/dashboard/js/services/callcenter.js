let url = "http://localhost:3000/callcenter";

// CADASTRAR 

function create() {
    let ajax = new XMLHttpRequest();

    let params = {
        razaoSocial: "Faculdade de Tecnologia Bandtec",
        nomeFantasia: "Bandtec",
        cnpj: "83.183.555/0001-43",
        logradouro: "Rua Hadock Lobo",
        cep: "08460-457",
        bairro: "Paulista",
        numero: "1025",
        nomeResponsavel: "Alessandro Goulart",
        emailResponsavel: "alessandro@gmail.com",
        fkPlano: 2
    };

    ajax.open("POST", `${url}/cadastrar`);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let response = ajax.responseText;
        }
    };

    ajax.send(JSON.stringify(params));
}

// LISTAR TODOS

function list() {

    let ajax = new XMLHttpRequest();
    ajax.open("GET", `${url}/listar`);
    ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let response = ajax.responseText;
            console.log(JSON.parse(response));
        }
    };
    ajax.send();
}

// ATUALIZAR

function update() {
    let ajax = new XMLHttpRequest();

    let params = {
        razaoSocial: "Faculdade de Tecnologia FIAP",
        nomeFantasia: "FIAP",
        cnpj: "38.381.222/0005-48",
        logradouro: "Rua tal",
        cep: "08460-888",
        bairro: "Paulista",
        numero: "25",
        nomeResponsavel: "Jose Silva",
        emailResponsavel: "jose@gmail.com",
        fkPlano: 1
    };

    let id = 1;

    ajax.open("PUT", `${url}/atualizar/${id}`);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let response = ajax.responseText;
        }
    };

    ajax.send(JSON.stringify(params));
}

// DELETAR

function deletar() {
    let ajax = new XMLHttpRequest();

    let id = 1;

    ajax.open("DELETE", `${url}/deletar/${id}`);
    ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let response = ajax.responseText;
        }
    };

    ajax.send();
}