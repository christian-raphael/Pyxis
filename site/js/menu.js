

let open = document.querySelector("#openMenu");
let close = document.querySelector("#closeMenu");
let menu = document.querySelector(".menu");

function opnedMenu(){
    menu.classList.remove('displaynone');
    open.classList.add('displaynone');
    close.classList.remove('displaynone');
}

function closedMenu(){
    menu.classList.add('displaynone');
    open.classList.remove('displaynone');
    close.classList.add('displaynone');
}

open.addEventListener("click", opnedMenu);
close.addEventListener("click", closedMenu);