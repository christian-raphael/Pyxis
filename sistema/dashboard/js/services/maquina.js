let url = "http://localhost:3000/maquina";

// CADASTRAR 

function create(e) {
    e.preventDefault();

    let ajax = new XMLHttpRequest();

    let params = {
        nome: nomeMaquina.value,
        modelo: modeloMaquina.value,
        fabricante: fabricanteMaquina.value,
        numeroSerie: "45456456",
        status: "1",
        fkSetor: 2
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

let btnCadastro = document.querySelector('#cadastrarMaquina');
btnCadastro.addEventListener('click', create);

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
        nome: "Computador Intel 456456G",
        modelo: "Pentium",
        fabricante: "Intel",
        status: "Ativa",
        fkSetor: 1
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