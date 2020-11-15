let modalRegister = document.querySelector(".modal-register");
let title = document.querySelector("div.area-register-callcenter h3");
let formRegister = document.querySelector("div.area-register-callcenter div.form");


let step;
let selectedContract;

function getSelectedContract(id) {
    selectedContract = id;
}

//MOSTRAR/ESCONDER MODAL
function showRegisterModal() {
    modalRegister.classList.toggle("displaynone");
    modalRegister.classList.toggle("displayFlex");
    document.body.classList.toggle("noScroll");

    step = 1;
    progressOnRegisterForm();
}

//PREENCHER CONTEUDO DO MODAL, DE ACORDO COM O PASSO DO PROCESSO DE CADASTRO
function cleanForm() {
    formRegister.innerHTML = "";
}

function fillModalContent(step, jsonContent, selectedContract) {
    cleanForm();

    title.innerText = jsonContent.title;

    jsonContent.fields.forEach(field => {
        if(step != 2) {
            formRegister.innerHTML += `
                <div class="form-group">
                    <label class="label">${field.label}</label>
                    <div class="input-area">
                        <i class="fas fa-${field.iconName} icon"></i>
                        <input type="text" id="${field.id}">
                    </div>
                </div>
            `;
        } else {
            formRegister.innerHTML += `
                <div class="form-group select-group">
                    <label class="label">${field.label}</label>
                    <div class="area-filter">
                        <i class="fas fa-sort-down icon icon-filter"></i>
                        <select name="" id="" class="group-filter">
                            <option value="1">Básico</option>
                            <option value="2">Padrão</option>
                            <option value="3">Premium</option>
                        </select>
                    </div>
                </div>
            `;

            let option = document.querySelector(`option[value='${selectedContract}']`);

            option.setAttribute("selected", "selected");
        }
    });

    formRegister.innerHTML += `
        <div class="form-group btn">
            <button onclick='progressOnRegisterForm()'>${jsonContent.buttonText}</button>
        </div>
    `;
}

function progressOnRegisterForm() {
    let content;
    
    switch(step) {
        case 1: 
            content = firstStepContent;
            break;
        case 2:
            content = secondStepContent;
            break;
        case 3:
            content = thirdStepContent;
            break;
    }

    if(step <= 3) {
        fillModalContent(step, content, selectedContract);
    }
    else if(step == 4){
        console.log("ir para outra page");
    }

    step++;
}