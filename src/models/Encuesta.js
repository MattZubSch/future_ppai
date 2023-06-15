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
    getDescripcionPreguntas(){
        let preguntas = [];
        this.preguntas.forEach(pregunta => {
            preguntas.push(pregunta.getDescripcion())
        })
        return preguntas;
    }
    getRespuestasPreguntas(array_respuestas){
        let respuestas = [];
        this.preguntas.forEach(pregunta => {
            let rtaPosibles = pregunta.getRtaPosibles()
            for (let i = 0; i < array_respuestas.length; i++) {
                let rta = rtaPosibles.indexOf(array_respuestas[i]) 
                respuestas.push(rta)
            }
        })
        return respuestas;
    }
}

//pregunta 18: ¿Recomendaría este servicio de atención al cliente a otros? (Siendo 1=Si y 2=No)
//pregunta 9: ¿Qué tan satisfecho está con la calidad del servicio de atención al cliente? (Siendo 1=Muy insatisfecho y 10=Muy satisfecho)
//pregunta 8: ¿Considera que la información proporcionada fue útil? (Siendo 1=Si y 2=No)
const encuesta_1 = new Encuesta("Encuesta de satisfacción", "2023-12-31 09:00:00");
encuesta_1.preguntas.push(array_preguntas[17], array_preguntas[8], array_preguntas[7])

//pregunta 1: ¿Qué tan fácil fue navegar por el sistema de atención al cliente? (Siendo 1=Muy Dificil y 10=Muy Facil)
//pregunta 6: ¿Recibió una respuesta rápida a su pregunta? (Siendo 1=Si y 2=No)
const encuesta_2 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
encuesta_2.preguntas.push(array_preguntas[0], array_preguntas[5]) 

//pregunta 7: ¿Qué tan útil fue la información proporcionada? (Siendo 1=Para nada útil y 10=Indispensable)
//pregunta 13: ¿Qué tan claro fue su entendimiento de las opciones disponibles para usted? (Siendo 1=Pésimo y 10=Excepcional)
//pregunta 16: ¿El sistema de atención al cliente resolvió su problema? (Siendo 1=Si y 2=No)
const encuesta_3 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
encuesta_3.preguntas.push(array_preguntas[6], array_preguntas[12], array_preguntas[15])

//pregunta 10: ¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si y 2=No)
//pregunta 15: ¿Qué tan bien resolvió el sistema de atención al cliente su problema? (Siendo 1=Pésimo y 10=Excepcional)
//pregunta 5: ¿Qué tan rápido recibió una respuesta a su pregunta? (Siendo 1=Muy Lento y 10=Muy Rapido)
const encuesta_4 = new Encuesta("Encuesta de satisfaccion", "2023-12-31 09:00:00");
encuesta_4.preguntas.push(array_preguntas[9], array_preguntas[14], array_preguntas[4])

//pregunta 11: ¿Qué tan amable fue la persona que lo atendió? (Siendo 1=Muy desagradable y 10=Muy amable)
//pregunta 14: ¿Comprendió claramente las opciones disponibles para usted? (Siendo 1=Si y 2=No)
const encuesta_5 = new Encuesta("Encuesta de atención del operario", "2023-04-30 09:00:00");
encuesta_5.preguntas.push(array_preguntas[10], array_preguntas[13])

//pregunta 2: ¿Fue fácil navegar por el sistema de atención al cliente? (Siendo 1=Si y 2=No)
//pregunta 17: ¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Totalmente)
//pregunta 4: ¿Encontró la información que necesitaba fácilmente? (Siendo 1=Si y 2=No)
const encuesta_6 = new Encuesta("Encuesta de calidad del servicio", "2023-04-30 09:00:00");
encuesta_6.preguntas.push(array_preguntas[1], array_preguntas[16], array_preguntas[3])

//pregunta 10: ¿Está satisfecho con la calidad del servicio de atención al cliente? (Siendo 1=Si y 2=No)
//pregunta 6: ¿Recibió una respuesta rápida a su pregunta? (Siendo 1=Si y 2=No)
//pregunta 17: ¿Qué tan probable es que recomiende este servicio de atención al cliente a otros? (Siendo 1=Imposible y 10=Totalmente)
const encuesta_7 = new Encuesta("Encuesta de satisfaccion", "2023-12-31 09:00:00");
encuesta_7.preguntas.push(array_preguntas[9], array_preguntas[5], array_preguntas[16]);

//pregunta 12: ¿Fue atendido por alguien amable? (Siendo 1=Si y 2=No)
//pregunta 9: ¿Qué tan satisfecho está con la calidad del servicio de atención al cliente? (Siendo 1=Muy insatisfecho y 10=Muy satisfecho)
const encuesta_8 = new Encuesta("Encuesta de atención del operario", "2023-12-31 09:00:00");
encuesta_8.preguntas.push(array_preguntas[11], array_preguntas[8]);


const array_encuestas = [encuesta_1, encuesta_2, encuesta_3, encuesta_4, encuesta_5, encuesta_6, encuesta_7, encuesta_8];

export default array_encuestas;   // Exporto las clases y los objetos para poder usarlos en otros archivos
