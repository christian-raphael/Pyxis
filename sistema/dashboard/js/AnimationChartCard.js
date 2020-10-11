let chartCards = document.querySelectorAll("section#charts .card");

let j = 0;

setInterval(function() {
    if(j < chartCards.length) {
        chartCards[j].classList.remove("opacity");
        j++;
    }
}, 300);