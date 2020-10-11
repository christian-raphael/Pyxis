var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

// DESKTOP

function animateDesktopMenu() {
    let containerMenu = document.querySelector(".nav-menu div.container");

    if(sessionStorage.getItem("homeAccessCounter") < 1) {
        containerMenu.classList.add("animated");
    }

    sessionStorage.setItem("homeAccessCounter", 1);
}

animateDesktopMenu();