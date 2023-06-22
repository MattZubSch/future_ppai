import array_preguntas from "./Pregunta.js";

class Encuesta{
    constructor(descripcion, fechaFinVigencia, preguntas) {
        this.descripcion = descripcion;
        this.fechaFinVigencia = fechaFinVigencia;
        this.preguntas = [];
    }
    getDescripcionEncuesta(){
        return this.descripcion;
    }
    getPreguntas(){
        return this.preguntas;
    }
    getDescripcionPreguntas(){
        // let preguntas = [];
        // this.preguntas.forEach(pregunta => {
        //     preguntas.push(pregunta.getDescripcion())
        // })
    }
}

//pregunta 7: ¿Qué tan satisfecho está con la calidad del servicio de atención al cliente?
//pregunta 12: ¿Comprendió claramente las opciones disponibles para usted? 
//pregunta 3: ¿Qué tan rápido recibió una respuesta a su pregunta?
const encuesta_1 = new Encuesta("Encuesta de satisfacción", "2023-12-31 09:00:00");
encuesta_1.preguntas.push(array_preguntas[6], array_preguntas[11], array_preguntas[2])

//pregunta 1: ¿Qué tan fácil fue navegar por el sistema de atención al cliente?
//pregunta 13: ¿Qué tan probable es que recomiende este servicio de atención al cliente a otros?
const encuesta_2 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
encuesta_2.preguntas.push(array_preguntas[0], array_preguntas[12]) 

//pregunta 5: ¿Qué tan útil fue la información proporcionada?
//pregunta 11: ¿Qué tan claro fue su entendimiento de las opciones disponibles para usted?
//pregunta 8: ¿Está satisfecho con la calidad del servicio de atención al cliente?
const encuesta_3 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
encuesta_3.preguntas.push(array_preguntas[4], array_preguntas[10], array_preguntas[7])

//pregunta 6: ¿Considera que la información proporcionada fue útil?
//pregunta 4: ¿Recibió una respuesta rápida a su pregunta?
//pregunta 14: ¿Recomendaría este servicio de atención al cliente a otros?
const encuesta_4 = new Encuesta("Encuesta de satisfaccion", "2023-12-31 09:00:00");
encuesta_4.preguntas.push(array_preguntas[5], array_preguntas[3], array_preguntas[13])

//pregunta 10: ¿Fue atendido por alguien amable?
//pregunta 11: ¿Qué tan claro fue su entendimiento de las opciones disponibles para usted?
const encuesta_5 = new Encuesta("Encuesta de atención del operario", "2023-04-30 09:00:00");
encuesta_5.preguntas.push(array_preguntas[9], array_preguntas[10])

//pregunta 2: ¿Fue fácil navegar por el sistema de atención al cliente?
//pregunta 6: ¿Considera que la información proporcionada fue útil?
//pregunta 13: ¿Qué tan probable es que recomiende este servicio de atención al cliente a otros?
const encuesta_6 = new Encuesta("Encuesta de calidad del servicio", "2023-04-30 09:00:00");
encuesta_6.preguntas.push(array_preguntas[1], array_preguntas[5], array_preguntas[12])

//pregunta 8: ¿Está satisfecho con la calidad del servicio de atención al cliente?
//pregunta 12: ¿Comprendió claramente las opciones disponibles para usted?
//pregunta 5: ¿Qué tan útil fue la información proporcionada?
const encuesta_7 = new Encuesta("Encuesta de satisfaccion", "2023-12-31 09:00:00");
encuesta_7.preguntas.push(array_preguntas[7], array_preguntas[11], array_preguntas[4]);

//pregunta 9: ¿Qué tan amable fue la persona que lo atendió?
//pregunta 4: ¿Recibió una respuesta rápida a su pregunta?
const encuesta_8 = new Encuesta("Encuesta de atención del operario", "2023-12-31 09:00:00");
encuesta_8.preguntas.push(array_preguntas[8], array_preguntas[3]);


const array_encuestas = [encuesta_1, encuesta_2, encuesta_3, encuesta_4, encuesta_5, encuesta_6, encuesta_7, encuesta_8];

export default array_encuestas;   // Exporto las clases y los objetos para poder usarlos en otros archivos
