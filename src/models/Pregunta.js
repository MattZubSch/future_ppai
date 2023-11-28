import array_paq_rtaPos from "./RespuestaPosible.js";

export class Pregunta{
    constructor(id, pregunta){
        this.id = id;
        this.pregunta = pregunta;
        this.rtaPosibles = [];
    }
    getDescripcion(){
        return this.pregunta;
    }
    getRtaPosibles(){
        // console.log("entra 1")
        let rtaPosibles = [];
        // console.log("entra 2")
        this.rtaPosibles.forEach(rtaPosible => {
            console.log(rtaPosible.getDescripcionRta())
            rtaPosibles.push(rtaPosible.getDescripcionRta());
            // console.log("entra 4 - iteracion")
        })
        console.log(rtaPosibles)
        return rtaPosibles;
    }
}

//preguntas de dificultad
const pregunta_1 = new Pregunta("¿Qué tan fácil fue navegar por el sistema de atención al cliente? (Siendo 1=Muy Dificil y 10=Muy Facil)", array_paq_rtaPos[0][0]);

const pregunta_2 = new Pregunta("¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si, fue facil y 2=No, fue dificil)", array_paq_rtaPos[0][1]);

//preguntas de velocidad
const pregunta_3 = new Pregunta("¿Qué tan rápido recibió una respuesta a su pregunta? (Siendo 1=Muy Lento y 10=Muy Rapido)", array_paq_rtaPos[1][0]);

const pregunta_4 = new Pregunta("¿Recibió una respuesta rápida a su pregunta? (Siendo 1=Si, fue rapido y 2=No, fue lento)", array_paq_rtaPos[1][1]);

//preguntas de utilidad
const pregunta_5 = new Pregunta("¿Qué tan útil fue la información proporcionada? (Siendo 1=Para nada útil y 10=Indispensable)", array_paq_rtaPos[2][0]);

const pregunta_6 = new Pregunta("¿Considera que la información proporcionada fue útil? (Siendo 1=Si, fue util y 2=No, no es util)", array_paq_rtaPos[2][1]);

//preguntas de satisfaccion
const pregunta_7 = new Pregunta("¿Qué tan satisfecho está con la calidad del servicio de atención al cliente? (Siendo 1=Muy insatisfecho y 10=Muy satisfecho)", array_paq_rtaPos[3][0]);

const pregunta_8 = new Pregunta("¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si, estoy satisfecho/a y 2=No, no estoy satisfecho/a)", array_paq_rtaPos[3][1]);

//preguntas de amabilidad
const pregunta_9 = new Pregunta("¿Qué tan amable fue la persona que lo atendió? (Siendo 1=Muy desagradable y 10=Muy amable)", array_paq_rtaPos[4][0]);

const pregunta_10 = new Pregunta("¿Fue atendido por alguien amable? (Siendo 1=Si, muy amable y 2=No,fue poco amable)", array_paq_rtaPos[4][1]);

//preguntas de calidad
const pregunta_11 = new Pregunta("¿Qué tan claro fue su entendimiento de las opciones disponibles para usted? (Siendo 1=Pésimo y 10=Excepcional)", array_paq_rtaPos[5][0]);

const pregunta_12 = new Pregunta("¿Comprendió claramente las opciones disponibles para usted? (Siendo 1=Si, fue muy claro y 2=No, fue ambiguo)", array_paq_rtaPos[5][1]);

//preguntas de recomendacion(posibilidad)
const pregunta_13 = new Pregunta("¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Totalmente)", array_paq_rtaPos[6][0]);

const pregunta_14 = new Pregunta("¿Recomendaría este servicio de atención al cliente a otros? (Siendo 1=Si, lo recomendaria y 2=No, no lo recomendaria)", array_paq_rtaPos[6][1]);


//array de preguntas
const array_preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4, pregunta_5, pregunta_6, pregunta_7, pregunta_8, pregunta_9, pregunta_10, pregunta_11, pregunta_12, pregunta_13, pregunta_14];

export default array_preguntas;

