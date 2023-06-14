import array_paq_rtaPos from "./RespuestaPosible.js";

class RespuestaDeCliente{
    constructor(fechaEncuesta, respuesta){
        this.fechaEncuesta = fechaEncuesta;
        this.respuesta = respuesta;
    }
    getDescripcionRta(){
        return this.respuesta.getDescripcionRta();
    }
    validarFechaEncuesta(fechaInicio, fechaFin){
        return this.fechaEncuesta >= fechaInicio && this.fechaEncuesta <= fechaFin;
    }
}


const rtaCliente_1_1 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[7][0]); // respuesta Si
const rtaCliente_1_2 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[3][7]); // respuesta 8
const rtaCliente_1_3 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPos[7][0]); // respuesta Si
//paquete de respuestas del cliente 1
const paq_rtaCliente_1 = [rtaCliente_1_1, rtaCliente_1_2, rtaCliente_1_3];

const rtaCliente_2_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[0][6]); // respuesta 7
const rtaCliente_2_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[7][0]); // respuesta Si
//paquete de respuestas del cliente 2
const paq_rtaCliente_2 = [rtaCliente_2_1, rtaCliente_2_2];

const rtaCliente_3_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[2][3]);// respuesta 4
const rtaCliente_3_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[5][5]);// respuesta 6
const rtaCliente_3_3 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPos[7][1]);// respuesta No
//paquete de respuestas del cliente 3
const paq_rtaCliente_3 = [rtaCliente_3_1, rtaCliente_3_2, rtaCliente_3_3];

const rtaCliente_4_1 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[7][0]);// respuesta 10
const rtaCliente_4_2 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[3][7]);// respuesta 8
const rtaCliente_4_3 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPos[1][9]);// respuesta 10
//paquete de respuestas del cliente 4
const paq_rtaCliente_4 = [rtaCliente_4_1, rtaCliente_4_2, rtaCliente_4_3];

const rtaCliente_5_1 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPos[4][6]);// respuesta 7
const rtaCliente_5_2 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPos[7][0]);// respuesta Si
//paquete de respuestas del cliente 5
const paq_rtaCliente_5 = [rtaCliente_5_1, rtaCliente_5_2];

const rtaCliente_6_1 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[7][0]);// respuesta Si
const rtaCliente_6_2 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[6][6]);// respuesta 7
const rtaCliente_6_3 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPos[7][0]);// respuesta Si
//paquete de respuestas del cliente 6
const paq_rtaCliente_6 = [rtaCliente_6_1, rtaCliente_6_2, rtaCliente_6_3];

export const array_paq_rtaCliente = [paq_rtaCliente_1, paq_rtaCliente_2, paq_rtaCliente_3, paq_rtaCliente_4, paq_rtaCliente_5, paq_rtaCliente_6];









// const rtaCliente_1_1 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPosibles[0][0]);
// const rtaCliente_1_2 = new RespuestaDeCliente("2023-03-29", array_paq_rtaPosibles[0][1]);
// //paquete de respuestas del cliente 1
// const paq_rtaCliente_1 = [rtaCliente_1_1, rtaCliente_1_2];

// const rtaCliente_2_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPosibles[1][0]);
// const rtaCliente_2_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPosibles[1][1]);
// const rtaCliente_2_3 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPosibles[1][2]);
// //paquete de respuestas del cliente 2
// const paq_rtaCliente_2 = [rtaCliente_2_1, rtaCliente_2_2, rtaCliente_2_3];

// const rtaCliente_3_1 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPosibles[2][0]);
// const rtaCliente_3_2 = new RespuestaDeCliente("2023-04-03", array_paq_rtaPosibles[2][1]);
// //paquete de respuestas del cliente 3
// const paq_rtaCliente_3 = [rtaCliente_3_1, rtaCliente_3_2];

// const rtaCliente_4_1 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPosibles[3][0]);
// const rtaCliente_4_2 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPosibles[3][1]);
// const rtaCliente_4_3 = new RespuestaDeCliente("2023-04-11", array_paq_rtaPosibles[3][2]);
// //paquete de respuestas del cliente 4
// const paq_rtaCliente_4 = [rtaCliente_4_1, rtaCliente_4_2, rtaCliente_4_3];

// const rtaCliente_5_1 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPosibles[4][0]);
// const rtaCliente_5_2 = new RespuestaDeCliente("2023-04-25", array_paq_rtaPosibles[4][1]);
// //paquete de respuestas del cliente 5
// const paq_rtaCliente_5 = [rtaCliente_5_1, rtaCliente_5_2];

// const rtaCliente_6_1 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPosibles[5][0]);
// const rtaCliente_6_2 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPosibles[5][1]);
// const rtaCliente_6_3 = new RespuestaDeCliente("2023-05-07", array_paq_rtaPosibles[5][2]);
// //paquete de respuestas del cliente 6
// const paq_rtaCliente_6 = [rtaCliente_6_1, rtaCliente_6_2, rtaCliente_6_3];

// const rtaCliente_7_1 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPosibles[6][0]);
// const rtaCliente_7_2 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPosibles[6][1]);
// const rtaCliente_7_3 = new RespuestaDeCliente("2023-05-18", array_paq_rtaPosibles[6][2]);
// //paquete de respuestas del cliente 7
// const paq_rtaCliente_7 = [rtaCliente_7_1, rtaCliente_7_2, rtaCliente_7_3];

// const rtaCliente_8_1 = new RespuestaDeCliente("2023-06-05", array_paq_rtaPosibles[7][0]);
// const rtaCliente_8_2 = new RespuestaDeCliente("2023-06-05", array_paq_rtaPosibles[7][1]);
// const rtCliente_8_3 = new RespuestaDeCliente("2023-06-05", array_paq_rtaPosibles[7][2]);
// //paquete de respuestas del cliente 8
// const paq_rtaCliente_8 = [rtaCliente_8_1, rtaCliente_8_2, rtCliente_8_3];

// //array de paquetes de respuestas de los clientes
// const array_paq_rtaCliente = [paq_rtaCliente_1, paq_rtaCliente_2, paq_rtaCliente_3, paq_rtaCliente_4, paq_rtaCliente_5, paq_rtaCliente_6, paq_rtaCliente_7, paq_rtaCliente_8];


export default array_paq_rtaCliente;

