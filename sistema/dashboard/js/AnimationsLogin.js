$('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
    } else {
        $(this).addClass('filled');
    }
})  


function colorButton(){
    let login = user.value;
    let senha = passwd.value;

    let newUser = addUser.value;
    let newEmail = addEmail.value;
    let newPasswd = addPasswd.value;

    let background = document.querySelectorAll(".background");
    if((login.length != 0) && (senha.length > 2)){
        background[0].classList.add("anime");
    } 
    
    if((newUser.length != 0) && (newEmail.length != 0) && (newPasswd.length > 2)){
        background[1].classList.add("anime");
    }
}


function goAdduser(){
    let container = document.querySelector('.container');
    let animacao = 'animate';

    container.classList.remove(animacao);
    setTimeout(function(){
        container.classList.add(animacao);
        document.querySelector('#formlogin').classList.add('displaynone');
        document.querySelector('#formcadastro').classList.remove('displaynone');
    },800)
   
}


function goLogin(){
    let container = document.querySelector('.container');
    let animacao = 'animate';

    container.classList.remove(animacao);
    setTimeout(function(){
        container.classList.add(animacao);
        document.querySelector('#formcadastro').classList.add('displaynone');
        document.querySelector('#formlogin').classList.remove('displaynone');
    },800);
   
}

let btnLogin = document.querySelector('.button-login');

function login(event){
    event.preventDefault();
    let container = document.querySelector('.container');
    let loader = document.querySelector('.loader');
    let areaLogin = document.querySelector('.area-login');
    let areaImg = document.querySelector('.area-img');

    container.classList.add('displaynone');
    loader.classList.remove('displaynone');

    setTimeout(function(){
        loader.classList.add('displaynone');
        areaLogin.classList.add('expand');
        areaImg.classList.add('decrease');
        setTimeout(function(){
            window.location = 'home.html';
        },1500);
    }, 2000);
}

btnLogin.addEventListener('click', login);