import array_paq_rtaPos from "./RespuestaPosible.js";

class Pregunta{
    constructor(pregunta, rtaPosibles){
        this.pregunta = pregunta;
        this.rtaPosibles = rtaPosibles;
    }
    getDescripcion(){
        return this.pregunta;
    }
}

const pregunta_1 = new Pregunta("¿Qué tan fácil fue navegar por el sistema de atención al cliente? (Siendo 1=Muy Dificil y 10=Muy Facil)", array_paq_rtaPos[0]);

const pregunta_2 = new Pregunta("¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_3 = new Pregunta("¿Qué tan fácil fue encontrar la información que necesitaba? (Siendo 1=Muy Dificil y 10=Muy Facil)", array_paq_rtaPos[0]);

const pregunta_4 = new Pregunta("¿Encontró la información que necesitaba fácilmente? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_5 = new Pregunta("¿Qué tan rápido recibió una respuesta a su pregunta? (Siendo 1=Muy Lento y 10=Muy Rapido)", array_paq_rtaPos[1]);

const pregunta_6 = new Pregunta("¿Recibió una respuesta rápida a su pregunta? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_7 = new Pregunta("¿Qué tan útil fue la información proporcionada? (Siendo 1=Para nada útil y 10=Indispensable)", array_paq_rtaPos[2]);

const pregunta_8 = new Pregunta("¿Considera que la información proporcionada fue útil? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_9 = new Pregunta("¿Qué tan satisfecho está con la calidad del servicio de atención al cliente? (Siendo 1=Muy insatisfecho y 10=Muy satisfecho)", array_paq_rtaPos[3]);

const pregunta_10 = new Pregunta("¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_11 = new Pregunta("¿Qué tan amable fue la persona que lo atendió? (Siendo 1=Muy desagradable y 10=Muy amable)", array_paq_rtaPos[4]);

const pregunta_12 = new Pregunta("¿Fue atendido por alguien amable? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_13 = new Pregunta("¿Qué tan claro fue su entendimiento de las opciones disponibles para usted? (Siendo 1=Pésimo y 10=Excepcional)", array_paq_rtaPos[5]);

const pregunta_14 = new Pregunta("¿Comprendió claramente las opciones disponibles para usted? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_15 = new Pregunta("¿Qué tan bien resolvió el sistema de atención al cliente su problema? (Siendo 1=Pésimo y 10=Excepcional)", array_paq_rtaPos[5]);

const pregunta_16 = new Pregunta("¿El sistema de atención al cliente resolvió su problema? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

const pregunta_17 = new Pregunta("¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Totalmente)", array_paq_rtaPos[6]);

const pregunta_18 = new Pregunta("¿Recomendaría este servicio de atención al cliente a otros? (Siendo 1=Si y 2=No)", array_paq_rtaPos[7]);

//array de preguntas
const array_preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4, pregunta_5, pregunta_6, pregunta_7, pregunta_8, pregunta_9, pregunta_10, pregunta_11, pregunta_12, pregunta_13, pregunta_14, pregunta_15, pregunta_16, pregunta_17, pregunta_18];

export default array_preguntas;

