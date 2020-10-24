
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


let iconClose = document.querySelector('.modal-close');
function closeModalMonitoramento(){
    modal.classList.add('displayNone');
}

iconClose.addEventListener('click', closeModalMonitoramento);