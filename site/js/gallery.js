let itemGallery = document.querySelectorAll(".itens-gallery");
let modal = document.querySelector('.modal');
let inModal = document.querySelector('#in-modal');
let area = document.querySelector('.area');

let aux;
let picture = [
    'portfolio-1.jpg','portfolio-2.jpg','portfolio-3.jpg',
    'portfolio-4.jpg','portfolio-5.jpg','portfolio-6.jpg'
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




