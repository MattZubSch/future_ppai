import array_encuestas from "./Encuesta.js";
import Encuesta from "./Encuesta.js";
import array_preguntas from "./Pregunta.js";



class RespuestaDeCliente{
    constructor(fechaEncuesta, respuesta){
        this.fechaEncuesta = fechaEncuesta;
        this.respuesta = respuesta;
    }
    getRespuestaDeCliente(){
        return this.respuesta.getDescripcionRta();
    }
}


{/*const rtaCliente_1_1 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[3][0][6]); // Moderadamente satisfecho
const rtaCliente_1_2 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[5][1][0]); // Si, fue muy claro
const rtaCliente_1_3 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[1][0][8]); // Bastante rápido
//paquete de respuestas del cliente 1
const paq_rtaCliente_1 = [rtaCliente_1_1, rtaCliente_1_2, rtaCliente_1_3];

const rtaCliente_2_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[0][0][9]); // Muy fácil
const rtaCliente_2_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[6][0][7]); // Muy probable
//paquete de respuestas del cliente 2
const paq_rtaCliente_2 = [rtaCliente_2_1, rtaCliente_2_2];

const rtaCliente_3_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[2][0][6]);// Muy útil
const rtaCliente_3_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[5][0][5]);// Bueno
const rtaCliente_3_3 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[3][1][0]);// Si, estoy satisfecho/a
//paquete de respuestas del cliente 3
const paq_rtaCliente_3 = [rtaCliente_3_1, rtaCliente_3_2, rtaCliente_3_3];

const rtaCliente_4_1 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[2][1][1]);// No, no es util
const rtaCliente_4_2 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[1][1][1]);// No, fue lento
const rtaCliente_4_3 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[6][1][1]);// No, no lo recomendaria
//paquete de respuestas del cliente 4
const paq_rtaCliente_4 = [rtaCliente_4_1, rtaCliente_4_2, rtaCliente_4_3];

const rtaCliente_5_1 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPos[4][1][0]);// Si, muy amable
const rtaCliente_5_2 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPos[5][0][8]);// Sobresaliente
//paquete de respuestas del cliente 5
const paq_rtaCliente_5 = [rtaCliente_5_1, rtaCliente_5_2];

const rtaCliente_6_1 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[0][1][0]);// Si, fue facil
const rtaCliente_6_2 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[2][1][0]);// Si, fue util
const rtaCliente_6_3 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[6][0][3]);// respuesta Si
//paquete de respuestas del cliente 6
const paq_rtaCliente_6 = [rtaCliente_6_1, rtaCliente_6_2, rtaCliente_6_3];

const rtaCliente_7_1 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPos[3][1][1]); //No, no estoy satisfecho/a
const rtaCliente_7_2 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPos[5][1][0]); //Si, fue muy claro
const rtaCliente_7_3 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPos[2][0][2]); //Ligeramente útil
//paquete de respuestas del cliente 7
const paq_rtaCliente_7 = [rtaCliente_7_1, rtaCliente_7_2, rtaCliente_7_3];


const rtaCliente_8_1 = new RespuestaDeCliente("2023-06-05", array_paq_rtaPos[4][0][9]); //Muy amable
const rtaCliente_8_2 = new RespuestaDeCliente("2023-06-05", array_paq_rtaPos[1][1][0]); //Si, fue rapido

//paquete de respuestas del cliente 8
const paq_rtaCliente_8 = [rtaCliente_8_1, rtaCliente_8_2];

export const array_paq_rtaCliente = [paq_rtaCliente_1, paq_rtaCliente_2, paq_rtaCliente_3, paq_rtaCliente_4, paq_rtaCliente_5, paq_rtaCliente_6, paq_rtaCliente_7, paq_rtaCliente_8];

*/}

// Función que genera una fecha aleatoria entre dos fechas límite, incluyendo hora y minutos
function generarFechaAleatoria(fechaInicio, fechaFin) {
    // Convertir las fechas a milisegundos
    const fechaInicioMs = fechaInicio.getTime();
    const fechaFinMs = fechaFin.getTime();
    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferenciaMs = fechaFinMs - fechaInicioMs;
    // Generar un número aleatorio entre 0 y la diferencia en milisegundos
    const aleatorioMs = Math.random() * diferenciaMs;
    // Sumar el número aleatorio a la fecha de inicio para obtener la fecha aleatoria
    const fechaAleatoriaMs = fechaInicioMs + aleatorioMs;
    // Crear un objeto Date a partir de la fecha aleatoria en milisegundos
    const fechaAleatoria = new Date(fechaAleatoriaMs);
    // Generar un número aleatorio entre 0 y 23 para las horas
    const aleatorioHoras = Math.floor(Math.random() * 24);
    // Generar un número aleatorio entre 0 y 59 para los minutos
    const aleatorioMinutos = Math.floor(Math.random() * 60);
    // Establecer las horas y minutos en la fecha aleatoria
    fechaAleatoria.setHours(aleatorioHoras);
    fechaAleatoria.setMinutes(aleatorioMinutos);
    // Devolver la fecha aleatoria
    return fechaAleatoria;
}

function formatearFecha(fecha) {
    const año = fecha.getFullYear().toString().slice(-2); // Obtiene los últimos 2 dígitos del año
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes porque los meses en JavaScript son de 0 a 11
    const dia = fecha.getDate().toString().padStart(2, '0');
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
  
    return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  }

//Creo el Array que contendra todos los objetos RespuestaDeCliente
let array_respuestasCliente = [];

//Funcion que respondera a las preguntas de todas las encuestas
const responderEncuestas = () => {
    console.log("Inicio de la funcion responderEncuestas")
    console.log(array_encuestas)
    //Ciclo for que recorrera todas las encuestas existentes
    //esto podria cambiarse para que se reciclen las encuestas y se generen en una cantidad arbitraria
    for (let i = 0; i < array_encuestas.length; i++) {
        console.log("Ingresa al loop")
        //Inicializo un array que contendra las respuestas de cada encuesta (array de respuestas parciales)
        let respuestaCliente = [];
        //generar en la que se responde la encuesta
        const fechaInicio = new Date("2022-01-01T00:00:00");
        const fechaFin = new Date("2022-12-31T23:59:59");
        const fechaGenerada = generarFechaAleatoria(fechaInicio, fechaFin);
        const fechaAleatoria = formatearFecha(fechaGenerada);
        console.log(fechaAleatoria) //verificar que la fecha se cree una vez por encuesta
        //Ciclo for que recorrera todas las preguntas existentes de cada encuesta
        console.log(array_encuestas[i].preguntas.length) //verificar que recorre el ciclo for
        for (let j = 0; j < array_encuestas[i].preguntas.length; j++) {
            console.log("Ingresa al loop 2") //verificar que el ciclo for se ejecuta
            //obtener la cantidad de respuestas posibles de cada pregunta
            const cantRtaPosibles = array_encuestas[i].preguntas[j].rtaPosibles.length;
            console.log("Cantidad de respuestas posibles: " + cantRtaPosibles)
            //generar un numero aleatorio entre 0 y la cantidad de respuestas posibles, el cual corresponderá al indice de la respuesta que se eligio
            const rtaPosibleAleatoria = Math.floor(Math.random() * cantRtaPosibles);
            //crear un objeto respuesa que contenga la fecha en la que se respondio y la respuesta elegida. Esto se realizara para cada pregunta de la encuesta actual. 
            //Note: revisar que la fecha aleatoria se mantenga igual (no se vuelva a generar una fecha aleatoria para cada pregunta de una misma encuesta)
            console.log(array_encuestas[i].preguntas[j].rtaPosibles[rtaPosibleAleatoria])
            let respuesta = new RespuestaDeCliente(fechaAleatoria, array_encuestas[i].preguntas[j].rtaPosibles[rtaPosibleAleatoria]);
            console.log("Objeto generado: ")
            console.log(respuesta)
            //agregar la respuesta al array de respuestas de la encuesta actual
            respuestaCliente.push(respuesta);
        }
        //terminado el recorrido por las preguntas, agregar el array de respuestas parciales al Array principal
        array_respuestasCliente.push(respuestaCliente);
    }
    console.log("Fin de la funcion responderEncuestas")
}


responderEncuestas();
console.log(array_respuestasCliente)

// Ejemplo de uso
{/*
const fechaInicio = new Date("2022-01-01T00:00:00");
const fechaFin = new Date("2022-12-31T23:59:59");
const fechaAleatoria = generarFechaAleatoria(fechaInicio, fechaFin);
console.log(fechaAleatoria); // Imprime una fecha aleatoria entre el 1 de enero y el 31 de diciembre de 2022, incluyendo hora y minutos
*/}




export default {array_respuestasCliente, responderEncuestas};

