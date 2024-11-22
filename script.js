$(document).ready(function() {

    $('.').slick({
       
        slidesToShow: 1,
        slidesToScroll: 3,
        infinit: true,
        dots: true,
        arrows: true,
        loop: true,
    })
})
        
ScrollReveal().reveal('.box', {
    duration: 3000, //Duração do efeito(em milessegundos), define  VELOCIDADE da transição
    origin: 'right', //Origem do efeito: o conteudo virá da direita para esquerda
    distance: '50px', //Disntacia que o elemento "viaja" antes de aparecer
});
       
ScrollReveal().reveal('#img', {
    duration: 3000, //Duração do efeito de rolagem
    origin:'bottom', //Origem do efeito: o conteudo vira de baixo paracima
    distance: '50px', //Distancia
});

const typed = new Typed('#typed-text', {
        
    strings: ["Aula de JavaScript", "Data 04/11/2024"],
    typeSpeed: 50,  //Velocidade que sera digitado nosso text
    backSpeed: 50,  //E a velocidade de retorno do text
    loop: true,   //Faz com que o texto fique em execução infinita
    showCursor: true, //Aqui estamos removendo o cursor padrão do HTML.
    faceOut: true, //Aidciona uma transição (opcional)

});


//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});


closeButton.addEventListener("click",function(){
    mobileMenu.classList.remove("flex");
});


       




    
