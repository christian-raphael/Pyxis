let menuLinks = document.querySelectorAll(".menu-link");

function smoothScroll(event) {
    event.preventDefault();
    
    let targetId = event.currentTarget.getAttribute('href');
    let section = document.querySelector(targetId);

    console.log(section);

    window.scrollTo({
        top: section.offsetTop - 40,
        behavior: 'smooth'
    });
}

function checkScroll() {
    let sections = document.querySelectorAll('section');
    let sectionsOffsetTop = [];

    sections.forEach(section => {
        sectionsOffsetTop.push(section.offsetTop);
    });

    let lastSection = 0;

    for (let i = 0; i < sectionsOffsetTop.length; i++) {
        if(document.documentElement.scrollTop > sectionsOffsetTop[i] - 50) {
            lastSection = i;
        }  
    }

    addClass(lastSection);
}

function addClass(link) {
    let currentLink = menuLinks[link];

    currentLink.classList.add('active');

    menuLinks.forEach(menuLink => {
        if(menuLink != currentLink) {
            menuLink.classList.remove("active");
        }
    });
}

document.addEventListener("scroll", checkScroll);
menuLinks.forEach(menuLink => menuLink.addEventListener("click", smoothScroll));

checkScroll();