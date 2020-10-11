let cards = document.querySelectorAll("section#overview .card");

let i = 0;

setInterval(function() {
    if(i < cards.length) {
        cards[i].classList.remove("opacity");
    i++;
    }
}, 100);