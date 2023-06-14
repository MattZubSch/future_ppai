import estados from "./Estado.js";

class CambioEstado{
    constructor(fechaHoraInicio, fechaHoraFin, estado) {
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
        this.estado = estado;
    }
    getFechaHoraInicio(){
        return this.fechaHoraInicio;
    }
    getFechaHoraFin(){
        return this.fechaHoraFin;
    }
    esUltimoEstado(){
        return this.fechaHoraFin === null;
    }
}

const cambioEstado_1_1 = new CambioEstado("2023-03-29 15:42:23", "2023-03-29 15:48:41", estados[0]);
const cambioEstado_1_2 = new CambioEstado("2023-03-29 15:48:41", null, estados[1]);
//paquete de estados llamada 1
const paq_cambioEstado_1 = [cambioEstado_1_1, cambioEstado_1_2];

const cambioEstado_2_1 = new CambioEstado("2023-04-03 10:17:09", "2023-04-03 10:33:30", estados[0]);
const cambioEstado_2_2 = new CambioEstado("2023-04-03 10:33:30", null, estados[1]);
//paquete de estados llamada 2
const paq_cambioEstado_2 = [cambioEstado_2_1, cambioEstado_2_2];

const cambioEstado_3_1 = new CambioEstado("2023-04-03 14:59:01", "2023-04-03 15:08:03", estados[0]);
const cambioEstado_3_2 = new CambioEstado("2023-04-03 15:08:03", "2023-04-03 15:20:41", estados[3]);
const cambioEstado_3_3 = new CambioEstado("2023-04-03 15:20:41", null, estados[1]);
//paquete de estados llamada 3
const paq_cambioEstado_3 = [cambioEstado_3_1, cambioEstado_3_2, cambioEstado_3_3];

const cambioEstado_4_1 = new CambioEstado("2023-04-06 09:34:14", "2023-04-06 09:37:02", estados[0]);
const cambioEstado_4_2 = new CambioEstado("2023-04-06 09:37:02", null, estados[2]);
//paquete de estados llamada 4
const paq_cambioEstado_4 = [cambioEstado_4_1, cambioEstado_4_2];

const cambioEstado_5_1 = new CambioEstado("2023-04-11 11:22:13", "2023-04-11 11:27:45", estados[0]);
const cambioEstado_5_2 = new CambioEstado("2023-04-11 11:27:45", null, estados[1]);
//paquete de estados llamada 5
const paq_cambioEstado_5 = [cambioEstado_5_1, cambioEstado_5_2];

const cambioEstado_6_1 = new CambioEstado("2023-04-25 12:34:56", "2023-04-25 12:42:01", estados[0]);
const cambioEstado_6_2 = new CambioEstado("2023-04-25 12:42:01", "2023-04-25 12:55:12", estados[3]);
const cambioEstado_6_3 = new CambioEstado("2023-04-25 12:55:12", null, estados[1]);
//paquete de estados llamada 6
const paq_cambioEstado_6 = [cambioEstado_6_1, cambioEstado_6_2, cambioEstado_6_3];

const cambioEstado_7_1 = new CambioEstado("2023-05-01 17:23:45", "2023-05-01 17:28:12", estados[0]);
const cambioEstado_7_2 = new CambioEstado("2023-05-01 17:28:12", "2023-05-01 17:35:23", estados[3]);
const cambioEstado_7_3 = new CambioEstado("2023-05-01 17:35:23", null, estados[2]);
//paquete de estados llamada 7
const paq_cambioEstado_7 = [cambioEstado_7_1, cambioEstado_7_2, cambioEstado_7_3];

const cambioEstado_8_1 = new CambioEstado("2023-05-07 09:34:56", "2023-05-07 09:43:01", estados[0]);
const cambioEstado_8_2 = new CambioEstado("2023-05-07 09:43:01", null, estados[1]);
//paquete de estados llamada 8
const paq_cambioEstado_8 = [cambioEstado_8_1, cambioEstado_8_2];


const cambioEstado_9_1 = new CambioEstado("2023-05-18 10:55:59", "2023-05-18 10:57:13", estados[0]);
const cambioEstado_9_2 = new CambioEstado("2023-05-18 10:57:13", "2023-05-18 11:32:01", estados[3]);
const cambioEstado_9_3 = new CambioEstado("2023-05-18 11:32:01", null, estados[1]);
//paquete de estados llamada 9
const paq_cambioEstado_9 = [cambioEstado_9_1, cambioEstado_9_2, cambioEstado_9_3];

const cambioEstado_10_1 = new CambioEstado("2023-06-05 14:09:20", "2023-06-05 14:12:01", estados[0]);
const cambioEstado_10_2 = new CambioEstado("2023-06-05 14:12:01", null, estados[1]);
//paquete de estados llamada 10
const paq_cambioEstado_10 = [cambioEstado_10_1, cambioEstado_10_2];

const cambioEstado_11_1 = new CambioEstado("2023-06-08 16:23:45", "2023-06-08 16:28:12", estados[0]);
const cambioEstado_11_2 = new CambioEstado("2023-06-08 16:28:12", null, estados[2]);
//paquete de estados llamada 11
const paq_cambioEstado_11 = [cambioEstado_11_1, cambioEstado_11_2];

//array de paquetes de estados
const paq_cambioEstado = [paq_cambioEstado_1, paq_cambioEstado_2, paq_cambioEstado_3, paq_cambioEstado_4, paq_cambioEstado_5, paq_cambioEstado_6, paq_cambioEstado_7, paq_cambioEstado_8, paq_cambioEstado_9, paq_cambioEstado_10, paq_cambioEstado_11];

export default paq_cambioEstado;