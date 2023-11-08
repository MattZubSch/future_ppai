// import crearEncuesta from "./src/models/Encuesta.js";
// import responderEncuesta from "./src/models/RespuestaDeCliente.js";
// import array_respuestasCliente from "./src/models/RespuestaDeCliente.js";

// function prueba() {
//     crearEncuesta()
//     responderEncuesta()
//     console.log(array_respuestasCliente)
// }

// Función que convierte un tiempo en formato "HH:MM:SS" a segundos
function tiempoASegundos(tiempo) {
    const [horas, minutos, segundos] = tiempo.split(":").map(Number);
    return horas * 3600 + minutos * 60 + segundos;
}

// Función que convierte segundos a tiempo en formato "HH:MM:SS"
function segundosATiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const seg = segundos % 60;
    return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
}

// Función que genera una cantidad aleatoria de tiempo en múltiples iteraciones cuya suma sea igual a la variable original
function generarTiemposAleatorios(tiempoOriginal, iteraciones) {
    const totalSegundos = tiempoASegundos(tiempoOriginal);
    let tiemposAleatorios = [];
    let sumaSegundos = 0;

    for (let i = 0; i < iteraciones - 1; i++) {
        let aleatorio = Math.floor(Math.random() * (totalSegundos - sumaSegundos));
        sumaSegundos += aleatorio;
        tiemposAleatorios.push(segundosATiempo(aleatorio));
    }

    tiemposAleatorios.push(segundosATiempo(totalSegundos - sumaSegundos));

    return tiemposAleatorios;
}

// Ejemplo de uso
const tiempoOriginal = "00:25:20";
const iteraciones = 3;
const tiemposAleatorios = generarTiemposAleatorios(tiempoOriginal, iteraciones);
console.log(tiemposAleatorios); // Imprime un array con tiempos aleatorios cuya suma es igual a "02:30:00"
