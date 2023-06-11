import array_encuestas from "./Encuesta.js";

class Pregunta{
    constructor(pregunta, encuesta){
        this.pregunta = pregunta;
        this.encuesta = encuesta;
    }
    getDescripcion(){
        return this.pregunta;
    }
}


//paquete de preguntras de la encuesta 1 = encuesta de satisfaccion
const pregunta_1_1 = new Pregunta("¿Considera que la información proporcionada fue útil? (Siendo 1=Si y 2=No)", array_encuestas[0]);
const pregunta_1_2 = new Pregunta("¿Qué tan satisfecho está con la calidad del servicio de atención al cliente? (Siendo 1=Nada Satisfecho y 10=Muy Satisfecho)", array_encuestas[0]);
//array de preguntas de la encuesta 1
const paq_preguntas_1 = [pregunta_1_1, pregunta_1_2];

//paquete de preguntras de la encuesta 2 = encuesta de calidad del servicio
const pregunta_2_1 = new Pregunta("¿Qué tan claro fue su entendimiento de las opciones disponibles para usted? (Siendo 1=Pésimo y 10=Excelente)", array_encuestas[1]);
const pregunta_2_2 = new Pregunta("¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Muy Probable)", array_encuestas[1]);
const pregunta_2_3 = new Pregunta("¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[1]);
//array de preguntas de la encuesta 2
const paq_preguntas_2 = [pregunta_2_1, pregunta_2_2, pregunta_2_3];

//paquete de preguntras de la encuesta 3 = encuesta de atencion del operario
const pregunta_3_1 = new Pregunta("¿Qué tan amable fue la persona que lo atendió? (Siendo 1=Muy Desagradable y 10=Muy Amable)", array_encuestas[2]);
const pregunta_3_2 = new Pregunta("¿Pudo el representante de atención al cliente responder a sus preguntas? (Siendo 1=Si y 2=No)", array_encuestas[2]);
//array de preguntas de la encuesta 3
const paq_preguntas_3 = [pregunta_3_1, pregunta_3_2];

//paquete de preguntras de la encuesta 4 = encuesta de satisfaccion
const pregunta_4_1 = new Pregunta("¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[3]);
const pregunta_4_2 = new Pregunta("¿Considera que la información proporcionada fue útil? (Siendo 1=Si y 2=No)", array_encuestas[3]);
const pregunta_4_3 = new Pregunta("¿Qué tan claro fue su entendimiento de las opciones disponibles para usted? (Siendo 1=Muy Impreciso y 10=Muy Claro)", array_encuestas[3]);
//array de preguntas de la encuesta 4
const paq_preguntas_4 = [pregunta_4_1, pregunta_4_2, pregunta_4_3];

//paquete de preguntras de la encuesta 5 = encuesta de calidad del servicio
const pregunta_5_1 = new Pregunta("¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Muy Probable)", array_encuestas[4]);
const pregunta_5_2 = new Pregunta("¿Fue fácil completar su tarea con la ayuda del sistema de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[4]);
//array de preguntas de la encuesta 5
const paq_preguntas_5 = [pregunta_5_1, pregunta_5_2];

//paquete de preguntras de la encuesta 6 = encuesta de satisfaccion
const pregunta_6_1 = new Pregunta("¿Considera que la información proporcionada fue útil? (Siendo 1=Si y 2=No)", array_encuestas[5]);
const pregunta_6_2 = new Pregunta("¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[5])
const pregunta_6_3 = new Pregunta("¿Qué tan bien resolvió el sistema de atención al cliente su problema? (Siendo 1=Pésimo y 10=Excelente)", array_encuestas[5]);
//array de preguntas de la encuesta 6
const paq_preguntas_6 = [pregunta_6_1, pregunta_6_2, pregunta_6_3];

//paquete de preguntras de la encuesta 7 = encuesta de atencion del operario
const pregunta_7_1 = new Pregunta("¿Fue atendido por alguien amable? (Siendo 1=Si y 2=No)", array_encuestas[6]);
const pregunta_7_2 = new Pregunta("¿Qué tan claro explico el operario a sus preguntas? (Siendo 1=Muy Ambiguo y 10= Muy Claro)", array_encuestas[6]);
const pregunta_7_3 = new Pregunta("¿Qué tan rápido recibió una respuesta a su pregunta? (Siendo 1=Muy Lento y 10=Muy Rapido)", array_encuestas[6]);
//array de preguntas de la encuesta 7
const paq_preguntas_7 = [pregunta_7_1, pregunta_7_2, pregunta_7_3];

//paquete de preguntras de la encuesta 8 = encuesta de satisfaccion
const pregunta_8_1 = new Pregunta("¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Muy Probable)", array_encuestas[7]);
const pregunta_8_2 = new Pregunta("¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[7]);
const pregunta_8_3 = new Pregunta("¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si y 2=No)", array_encuestas[7]);
//array de preguntas de la encuesta 8
const paq_preguntas_8 = [pregunta_8_1, pregunta_8_2, pregunta_8_3];

//array de paquetes de preguntas
const array_paq_preguntas = [paq_preguntas_1, paq_preguntas_2, paq_preguntas_3, paq_preguntas_4, paq_preguntas_5, paq_preguntas_6, paq_preguntas_7, paq_preguntas_8];

export default array_paq_preguntas;

