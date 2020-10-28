let itemGallery = document.querySelectorAll(".itens-gallery");
let modal = document.querySelector('.modal');
let inModal = document.querySelector('#in-modal');
let area = document.querySelector('.area');

let aux;
let picture = [
    'home-suporte1.png','relatorios-gestor2.png','graficos-gestor4.png',
    'monitoramento-suporte3.png','detalhes-suporte5.png','configuracoes-6.png'
];

function pictureModal(event){
    modal.classList.add('displayFlex');

    let animacao = 'animate';
    area.classList.remove(animacao);

    let params = event.target.getAttribute("id");
    inModal.src = `img/gallery/${picture[params]}`;
    aux = params;

    setTimeout(function(){
        area.classList.add(animacao);
    },200)
}

itemGallery.forEach(item => {
    item.addEventListener('click', pictureModal);
});


function next(){
    let animacao = 'animate';
    area.classList.remove(animacao);
    setTimeout(function(){
        area.classList.add(animacao);
        if(aux==5){
            aux=-1;
        }
        aux++;
        inModal.src = `img/gallery/${picture[aux]}`;
        inModal.style.transition = '0.5s';
    },500)
}


function back(){
    let animacao = 'animate';
    area.classList.remove(animacao);
    setTimeout(function(){
        area.classList.add(animacao);
        if(aux==0){
            aux=6;
        }
        aux--;    
        inModal.src = `img/gallery/${picture[aux]}`;
        inModal.style.transition = '0.5s';
    },500)
}



let close = document.querySelector("#close");

function closedModal(){
    modal.classList.remove("displayFlex");
}

close.addEventListener('click', closedModal);




