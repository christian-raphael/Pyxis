let tabs = document.querySelectorAll(".tab-modal");
let detailsContent = document.querySelector(".details-content");
let incidentsContent = document.querySelector(".incidents-content");

function changeTabModal(event) {
    let idTab = event.target.getAttribute("id");

    tabs.forEach(tab => {
        if(tab.getAttribute("id") == idTab) {
            tab.classList.add("current");

            if(tab.getAttribute("id") == "tab-details") {
                incidentsContent.classList.add("hidden-content");
                detailsContent.classList.remove("hidden-content");
            } else {
                detailsContent.classList.add("hidden-content");
                incidentsContent.classList.remove("hidden-content");
            }
        }
        else {
            tab.classList.remove("current");
        }
    });
}

tabs.forEach(tab => {
    tab.addEventListener("click", changeTabModal);
});