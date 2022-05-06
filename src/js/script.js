const btnProjetos = document.getElementById("btnProjetos");
const btnHabilidades = document.getElementById("btnHabilidades");
const projetos = document.querySelector(".displayProjetos");
const habilidades = document.querySelector(".displayHabilidades");
const trocaTema = document.querySelector(".trocaTema");
const onda = document.querySelector(".onda");

const themes = {
    "dark": "light",
    "light": "dark",
}

if(trocaTema){
    trocaTema.addEventListener("click", event => {
        event.preventDefault();
        const currentTheme = document.body.dataset.tema;
        document.body.setAttribute("data-tema", themes[currentTheme] || "light");
        if(currentTheme === "light"){
            onda.setAttribute("src", "./src/image/onda-dark.png");
        } else {
            onda.setAttribute("src", "./src/image/onda-light.png");
        }
    });
}

btnProjetos.addEventListener("click", () =>{
    projetos.style.display = "flex";
    habilidades.style.display = "none";
});

btnHabilidades.addEventListener("click", () =>{
    habilidades.style.display = "flex";
    habilidades.style.justifyContent = "center";
    projetos.style.display = "none";
});

// Animação quando scrolla
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 25));
}