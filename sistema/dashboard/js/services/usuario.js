let url = "http://localhost:3000/usuario";

// CADASTRAR 

function create() {
    let ajax = new XMLHttpRequest();

    let params = {
        nome: "Lucas",
        email: "lucas@call.com",
        login: "lucas_1",
        senha: "H3lloW0rld",
        tipo: 0,
        isAdmin: true,
        chaveAtivacao: "XTR123-1",
        fkCallcenter: 3
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
        nome: "Lucas",
        email: "lucas@call.com",
        login: "lucas_1",
        senha: "H3lloW0rld",
        tipo: 1,
        isAdmin: true,
        chaveAtivacao: "XTR123-1",
        fkCallcenter: 3
    };

    let id = 3;

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

    let id = 3;

    ajax.open("DELETE", `${url}/deletar/${id}`);
    ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let response = ajax.responseText;
        }
    };

    ajax.send();
}