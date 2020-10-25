
let iconComputer = document.querySelectorAll('.icon-computer');
let modal = document.querySelector('.modal-computer');

function expandModalMonitoramento(){
    if(modal.classList.contains('displayNone')){
        modal.classList.remove('displayNone');
    }
}

iconComputer.forEach(icon => {
    icon.addEventListener('click', expandModalMonitoramento);
});

// ------------------------------------

let btnAdd = document.querySelector('.btnAdd');
let modalAdd = document.querySelector('.modalAdd');

function expandModalAdd(){
    if(modalAdd.classList.contains('displayNone')){
        modalAdd.classList.remove('displayNone');
    }
}

btnAdd.addEventListener('click', expandModalAdd);


// ------------------------------------

let iconClose = document.querySelectorAll('.modal-close');
function closeModalMonitoramento(){
    modal.classList.add('displayNone');
    modalAdd.classList.add('displayNone');

}

iconClose.forEach(element => {
    element.addEventListener('click', closeModalMonitoramento);
});
