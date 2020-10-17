const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navlinks");
const container = document.querySelector(".container");
const links = document.querySelectorAll(".navlinks li");
const contatos = document.querySelector(".contato");
const teste = document.querySelector(".teste");
const botao = document.querySelector("#click1");
const flip = document.querySelector(".card");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    container.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    });
});

contatos.addEventListener("click", () =>{
    teste.classList.toggle("open");
});

botao.addEventListener("click", () =>{
    flip.classList.toggle("click");
});

function voltatopo(){ 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

function aparece1(){
    const efeito = document.querySelector("#minhap");

    efeito.style.transform = 'translateX(20px)';
    efeito.style.transition = '1.5s ease-in-out';

}
function aparece2(){
    const efeito = document.querySelector("#compp");

    efeito.style.transform = 'translateX(20px)';
    efeito.style.transition = '1.5s ease-in-out';

}
function aparece3(){
    const efeito = document.querySelector("#expp");

    efeito.style.opacity = '1';
    efeito.style.transition = '2s ease-in-out';

}



