import array_paq_preguntas from "./Pregunta.js";

class RespuestaPosible{
    constructor(descripcion, valor, pregunta) {
        this.descripcion = descripcion;
        this.valor = valor;
        this.pregunta = pregunta;
    }
    getDescripcionRta(){
        return this.descripcion;
    }
    getValorRta(){
        return this.valor;
    }
}

const rtaPosible_1_1 = new RespuestaPosible("Si", 1, array_paq_preguntas[0][0]);
const rtaPosible_1_2 = new RespuestaPosible("Muy Buena", 8, array_paq_preguntas[0][1]);
//paquete de respuestas de la encuesta 1
const paq_rtaPosibles_1 = [rtaPosible_1_1, rtaPosible_1_2];

const rtaPosible_2_1 = new RespuestaPosible("Muy Malo", 2, array_paq_preguntas[1][0]);
const rtaPosible_2_2 = new RespuestaPosible("Poco Probable", 4, array_paq_preguntas[1][1]);
const rtaPosible_2_3 = new RespuestaPosible("No", 2, array_paq_preguntas[1][2]);
//paquete de respuestas de la encuesta 2
const paq_rtaPosibles_2 = [rtaPosible_2_1, rtaPosible_2_2, rtaPosible_2_3];

const rtaPosible_3_1 = new RespuestaPosible("Muy Amable", 10, array_paq_preguntas[2][0]);
const rtaPosible_3_2 = new RespuestaPosible("Si", 1, array_paq_preguntas[2][1]);
//paquete de respuestas de la encuesta 3
const paq_rtaPosibles_3 = [rtaPosible_3_1, rtaPosible_3_2];

const rtaPosible_4_1 = new RespuestaPosible("Si", 1, array_paq_preguntas[3][0]);
const rtaPosible_4_2 = new RespuestaPosible("Si", 1, array_paq_preguntas[3][1]);
const rtaPosible_4_3 = new RespuestaPosible("Claro", 7, array_paq_preguntas[3][2]);
//paquete de respuestas de la encuesta 4
const paq_rtaPosibles_4 = [rtaPosible_4_1, rtaPosible_4_2, rtaPosible_4_3];

const rtaPosible_5_1 = new RespuestaPosible("Probablemente", 5, array_paq_preguntas[4][0]);
const rtaPosible_5_2 = new RespuestaPosible("Si", 1, array_paq_preguntas[4][1]);
//paquete de respuestas de la encuesta 5
const paq_rtaPosibles_5 = [rtaPosible_5_1, rtaPosible_5_2];

const rtaPosible_6_1 = new RespuestaPosible("No", 2, array_paq_preguntas[5][0]);
const rtaPosible_6_2 = new RespuestaPosible("No", 2, array_paq_preguntas[5][1]);
const rtaPosible_6_3 = new RespuestaPosible("Pesimo", 1, array_paq_preguntas[5][2]);
//paquete de respuestas de la encuesta 6
const paq_rtaPosibles_6 = [rtaPosible_6_1, rtaPosible_6_2, rtaPosible_6_3];

const rtaPosible_7_1 = new RespuestaPosible("Si", 1, array_paq_preguntas[6][0]);
const rtaPosible_7_2 = new RespuestaPosible("Muy Claro", 9, array_paq_preguntas[6][1]);
const rtaPosible_7_3 = new RespuestaPosible("Lento", 3, array_paq_preguntas[6][2]);
//paquete de respuestas de la encuesta 7
const paq_rtaPosibles_7 = [rtaPosible_7_1, rtaPosible_7_2, rtaPosible_7_3];

const rtaPosible_8_1 = new RespuestaPosible("Impsible", 1, array_paq_preguntas[7][0]);
const rtaPosible_8_2 = new RespuestaPosible("Si", 1, array_paq_preguntas[7][1]);
const rtaPosible_8_3 = new RespuestaPosible("No", 2, array_paq_preguntas[7][2]);
//paquete de respuestas de la encuesta 8
const paq_rtaPosibles_8 = [rtaPosible_8_1, rtaPosible_8_2, rtaPosible_8_3];

//array de paquetes de respuestas
const array_paq_rtaPosibles = [paq_rtaPosibles_1, paq_rtaPosibles_2, paq_rtaPosibles_3, paq_rtaPosibles_4, paq_rtaPosibles_5, paq_rtaPosibles_6, paq_rtaPosibles_7, paq_rtaPosibles_8];


export default array_paq_rtaPosibles;


