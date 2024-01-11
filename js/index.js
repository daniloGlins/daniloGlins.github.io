function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("content").classList.add('open');
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("content").classList.remove('open');
}

function closeNavOnResize() {
    if (window.innerWidth > 768) {
        closeNav();
    }
}

window.addEventListener('resize', closeNavOnResize);
closeNavOnResize();

//Contador
var contador1 = document.getElementById('contador');
var valorAtual1 = 0;
var valorFinal1 = 20;

var contador2 = document.getElementById('contador2');
var valorAtual2 = 180;
var valorFinal2 = 200;

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        var intervalo1 = setInterval(function () {
            if (valorAtual1 < valorFinal1) {
                valorAtual1++;
                contador1.innerText = valorAtual1;
            } else {
                clearInterval(intervalo1);
            }
        }, 80);//velocidade do contador

        var intervalo2 = setInterval(function () {
            if (valorAtual2 < valorFinal2) {
                valorAtual2++;
                contador2.innerText = "+" + valorAtual2; 
            } else {
                clearInterval(intervalo2);
            }
        }, 80);//velocidade do contador
    }
}, { threshold: [0] });

observer.observe(contador1);
observer.observe(contador2);



