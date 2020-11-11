let menu = document.querySelector(".menu");

function displayMenu() {
    menu.classList.toggle('displaynone');
}

var forEach = function (t: string | any[] | NodeListOf<Element>, o: { (hamburger: any): void; call?: any; }, r: void) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger: { addEventListener: (arg0: string, arg1: () => void, arg2: boolean) => void; }) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}