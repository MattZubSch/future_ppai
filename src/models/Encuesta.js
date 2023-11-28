export class Encuesta{
    constructor(id, descripcion, fechaFinVigencia, preguntas) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaFinVigencia = fechaFinVigencia;
        this.preguntas = preguntas;
    }
    getDescripcionEncuesta(){
        return this.descripcion;
    }
    getPreguntas(){
        return this.preguntas;
    }
    esRespuestaPosible(respuesta){
        let rtaPosible = false;
        console.log("=======Revisar contenido preguntas=======")
        console.log(this.preguntas)
        this.preguntas.forEach(pregunta => {
            console.log(pregunta)
            if (pregunta !== null){
                let respuestasPosibles = pregunta.getRtaPosibles()
                if (respuestasPosibles.indexOf(respuesta) !== -1){
                    rtaPosible = {pregunta: pregunta, respuesta: respuesta}
                }
            }
        })
        return rtaPosible
    }
}

{/*
//Inicializo el array que guardara las encuestas creadas
const array_encuestas = [];


export function crearEncuesta(fechaFinVigencia){
    //Creo un array con los distintos tipos de Descripciones
    const descEncuestas = ["Encuesta de satisfacción", "Encuesta de calidad del servicio", "Encuesta de atención del operario"];
    //Creo el objeto Encuesta con los parametros iniciales
    let encuesta = new Encuesta(descEncuestas[Math.floor(Math.random() * descEncuestas.length)], fechaFinVigencia);
    //Creo un numero aleatorio de preguntas entre 2 y 3
    let cantPreguntas = Math.ceil(Math.random() * 2 + 1);
    //Segun la cantidad de preguntas, recorro un ciclo for para elegirlas aleatoriamente
    for (let j = 0; j < cantPreguntas; j++) {
        //Selecciono una pregunta y la agrego al objeto Encuesta
        let pregunta = array_preguntas[Math.floor(Math.random() * array_preguntas.length)];
        encuesta.preguntas.push(pregunta);
    }
    //Agrego el objeto Encuesta al array de encuestas
    array_encuestas.push(encuesta);
    return encuesta;
}

// Exporto las clases y los objetos para poder usarlos en otros archivos
export default array_encuestas 

*/}