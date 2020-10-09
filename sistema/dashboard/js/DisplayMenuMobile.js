let ulMenu = document.querySelector("ul.menu");
let divAreaMenu = document.querySelector("div.menu-area");
let btnMenu = document.querySelector(".btnMenu");

function displayMenu(e) {
    ulMenu.classList.toggle("hidden");
    divAreaMenu.classList.toggle("hidden");

    if(e.target == divAreaMenu) {
        btnMenu.classList.remove("is-active");
    }
}

btnMenu.addEventListener("click", displayMenu);
divAreaMenu.addEventListener("click", displayMenu);