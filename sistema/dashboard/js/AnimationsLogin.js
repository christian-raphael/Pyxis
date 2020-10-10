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
    if((login.length != 0) && (senha.length > 2)){
        let background = document.querySelector(".background");
        background.classList.add("anime");
    }
}
