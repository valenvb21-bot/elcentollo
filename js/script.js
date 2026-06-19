let indiceActual = 0;
const diapositivas = document.querySelectorAll('.diapositiva');
const puntos = document.querySelectorAll('.punto');
const tiempoAutomatico = 4000; // 

function mostrarDiapositiva(indice) {
    if (indice >= diapositivas.length) { indiceActual = 0; }
    else if (indice < 0) { indiceActual = diapositivas.length - 1; }
    else { indiceActual = indice; }

    diapositivas.forEach(slide => slide.classList.remove('activa'));
    puntos.forEach(punto => punto.classList.remove('activo'));
    diapositivas[indiceActual].classList.add('activa');
    puntos[indiceActual].classList.add('activo');
}

function irADiapositiva(indice) {
    mostrarDiapositiva(indice);
    reiniciarTemporizador();
}

let intervaloCarrusel = setInterval(() => {
    indiceActual++;
    mostrarDiapositiva(indiceActual);
}, tiempoAutomatico);

function reiniciarTemporizador() {
    clearInterval(intervaloCarrusel);
    intervaloCarrusel = setInterval(() => {
        indiceActual++;
        mostrarDiapositiva(indiceActual);
    }, tiempoAutomatico);
}