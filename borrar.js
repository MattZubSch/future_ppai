import crearEncuesta from "./src/models/Encuesta.js";
import responderEncuesta from "./src/models/RespuestaDeCliente.js";
import array_respuestasCliente from "./src/models/RespuestaDeCliente.js";

function prueba() {
    crearEncuesta()
    responderEncuesta()
    console.log(array_respuestasCliente)
}

// prueba()

// function randomNumber (num) {
//     let result = Math.floor(Math.random() * num);
//     return result
// }

// function verResultados (num, iteraciones) {
//     const longitud = 10;
//     const array = new Array(longitud).fill(0);
//     for (let i = 0; i < iteraciones; i++) {
//         let aleatorio = randomNumber(num)
//         array[aleatorio] += 1
//     }
//     return array
// }
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(verResultados(10, 100))

