let url = "http://localhost:3000/leitura";

// CADASTRAR 

function create() {
    let ajax = new XMLHttpRequest();

    let params = {
        usoCpu: 50.0,
        usoMemoria: 60.0,
        usoDisco: 70.0,
        velocidadeRede: 50.0,
        dataHoraLeitura: 18/11/2020,
        fkMaquina: 1,            
        fkOcorrencia: 1
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
        usoCpu: 50.0,
        usoMemoria: 60.0,
        usoDisco: 70.0,
        velocidadeRede: 50.0,
        dataHoraLeitura: 18/11/2020,
        fkMaquina: 1,            
        fkOcorrencia: 1
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

