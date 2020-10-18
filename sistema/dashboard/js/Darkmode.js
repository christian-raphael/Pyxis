
function enableDarkMode() {

    var checkDarkMode = document.getElementById('checkDarkMode');
    if (checkDarkMode.checked) {
        document.body.classList.add('darkMode');
    } else {
        document.body.classList.remove('darkMode');
    }
}
