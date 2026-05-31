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

const conejito = document.getElementById("mascota-img");

function actualizarPantalla() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    displayTiempo.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function iniciarTimer() {
    if (estaCorriendo) return;

    estaCorriendo = true;

    conejito.src = "img/bunnywork.gif";

    timer = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            actualizarPantalla();
        } else {
            clearInterval(timer);
            estaCorriendo = false;
            alert("¡Buen Trabajo! :D")

            conejito.src = "img/bunnyrest.png";
        }
    }, 1000);
}

function pausarTimer() {
    clearInterval(timer);
    estaCorriendo = false;

    conejito.src = "img/bunnysleep.gif";
}

function detenerTimer() {
    clearInterval(timer);
    estaCorriendo = false;
    tiempoRestante = 25 * 60;
    actualizarPantalla();

    conejito.src = "img/bunnyrest.png";
}

function cambiarModo(minutos) {
    clearInterval(timer);
    estaCorriendo = false;
    tiempoRestante = minutos * 60;
    actualizarPantalla();

    if (minutos === 5 || minutos === 15) {
    conejito.src = "img/bunnysleep.gif";
    } else {
        conejito.src = "img/bunnyrest.png";
    }
}

btnInicio.addEventListener("click", iniciarTimer);
btnPausa.addEventListener("click", pausarTimer);
btnDetener.addEventListener("click", detenerTimer);

if(modoTrabajo) modoTrabajo.addEventListener("click", () => cambiarModo(25));
if(modoCorto) modoCorto.addEventListener("click", () => cambiarModo(5));
if(modoLargo) modoLargo.addEventListener("click", () => cambiarModo(15));

