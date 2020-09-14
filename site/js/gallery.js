let itemGallery = document.querySelectorAll(".itens-gallery");
let modal = document.querySelector('.modal');
let inModal = document.querySelector('#in-modal');

let aux;
let picture = [
    'portfolio-1.jpg','portfolio-2.jpg','portfolio-3.jpg',
    'portfolio-4.jpg','portfolio-5.jpg','portfolio-6.jpg'
];

function pictureModal(event){
    let params = event.target.getAttribute("id");
    inModal.src = `img/gallery/${picture[params]}`;
    modal.classList.add('displayFlex');
    aux = params;
}

itemGallery.forEach(item => {
    item.addEventListener('click', pictureModal);
});


function next(){
    if(aux==5){
        aux=-1;
    }
    aux++;
    inModal.src = `img/gallery/${picture[aux]}`;
    inModal.style.transition = '0.5s';
}

function back(){
    if(aux==0){
        aux=6;
    }
    aux--;    
    inModal.src = `img/gallery/${picture[aux]}`;
    inModal.style.transition = '0.5s';
}



let close = document.querySelector("#close");

function closedModal(){
    modal.classList.remove("displayFlex");
}

close.addEventListener('click', closedModal);




