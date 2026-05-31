let timer;
let tiempoRestante = 25 * 60;
let estaCorriendo =false;

const displayTiempo = document.getElementById("timer");
const btnInicio = document.getElementById("btn-inicio");
const btnPausa = document.getElementById("btn-pausa");
const btnDetener = document.getElementById("btn-reinicio");

const modoTrabajo = document.getElementById("modo-trabajo");
const modoCorto = document.getElementById("modo-corto");
const modoLargo = document.getElementById("modo-largo");

function actualizarPantalla() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    displayTiempo.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function iniciarTimer() {
    if (estaCorriendo) return;

    estaCorriendo = true;

    timer = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            actualizarPantalla();
        } else {
            clearInterval(timer);
            estaCorriendo = false;
            alert("¡Buen Trabajo! :D")
        }
    }, 1000);
}

function pausarTimer() {
    clearInterval(timer);
    estaCorriendo = false;
}

function detenerTimer() {
    clearInterval(timer);
    estaCorriendo = false;
    tiempoRestante = 25 * 60;
    actualizarPantalla();
}

function cambiarModo(minutos) {
    clearInterval(timer);
    estaCorriendo = false;
    tiempoRestante = minutos * 60;
    actualizarPantalla();
}

btnInicio.addEventListener("click", iniciarTimer);
btnPausa.addEventListener("click", pausarTimer);
btnDetener.addEventListener("click", detenerTimer);

if(modoTrabajo) modoTrabajo.addEventListener("click", () => cambiarModo(25));
if(modoCorto) modoCorto.addEventListener("click", () => cambiarModo(5));
if(modoLargo) modoLargo.addEventListener("click", () => cambiarModo(15));