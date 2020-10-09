
function colorButton(){
    let login = user.value;
    let senha = passwd.value;
    if((login.length != 0) && (senha.length > 2)){
        let background = document.querySelector(".background");
        background.classList.add("anime");
    }
}