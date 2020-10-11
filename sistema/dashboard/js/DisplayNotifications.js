let buttonsNotifications = document.querySelectorAll(".btnNotifications");

function displayNotifications() {
    document.querySelector("div.notifications").classList.toggle("hidden");
}

buttonsNotifications.forEach(button => {
    button.addEventListener("click", displayNotifications);
});