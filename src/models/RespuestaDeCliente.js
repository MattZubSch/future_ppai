import { crearEncuesta } from "./Encuesta.js";

class RespuestaDeCliente{
    constructor(fechaEncuesta, respuesta){
        this.fechaEncuesta = fechaEncuesta;
        this.respuesta = respuesta;
    }
    getRespuestaDeCliente(){
        return this.respuesta.getDescripcionRta();
    }
}




// Función que genera una fecha aleatoria entre dos fechas límite, incluyendo hora y minutos

//Creo el Array que contendra todos los objetos RespuestaDeCliente
let array_respuestasCliente = [];

//Funcion que respondera a las preguntas de todas las encuestas
export function responderEncuestas(fechaFinVigencia, fechaFinLlamada){
        //console.log("Inicio de la funcion responderEncuestas")
    let encuestaResponder = crearEncuesta(fechaFinVigencia);
    //inicio el array que contendra las respuestas de cada encuesta (array de respuestas totales)
    let respuestaCliente = [];
        // console.log("Ingresa al loop")
    //Inicializo un array que contendra las respuestas de cada encuesta (array de respuestas parciales)
    //Ciclo for que recorrera todas las preguntas existentes de cada encuesta
    for (let i = 0; i < encuestaResponder.preguntas.length; i++) {
            //console.log("Ingresa al loop 2") //verificar que el ciclo for se ejecuta
        //obtener la cantidad de respuestas posibles de cada pregunta
        const cantRtaPosibles = encuestaResponder.preguntas[i].rtaPosibles.length;
            //console.log("Cantidad de respuestas posibles: " + cantRtaPosibles)
        //generar un numero aleatorio entre 0 y la cantidad de respuestas posibles, el cual corresponderá al indice de la respuesta que se eligio
        const rtaPosibleAleatoria = Math.floor(Math.random() * cantRtaPosibles);
        //crear un objeto respuesta que contenga la fecha en la que se respondio y la respuesta elegida. Esto se realizara para cada pregunta de la encuesta actual. 
        //Note: revisar que la fecha aleatoria se mantenga igual (no se vuelva a generar una fecha aleatoria para cada pregunta de una misma encuesta)
            //console.log(array_encuestas[i].preguntas[i].rtaPosibles[rtaPosibleAleatoria])
        let respuesta = new RespuestaDeCliente(fechaFinLlamada, encuestaResponder.preguntas[i].rtaPosibles[rtaPosibleAleatoria]);
            // console.log("Objeto generado: ")
            // console.log(respuesta)
        //agregar la respuesta al array de respuestas de la encuesta actual
        respuestaCliente.push(respuesta);
    }
    //terminado el recorrido por las preguntas, agregar el array de respuestas parciales al Array principal
    array_respuestasCliente.push(respuestaCliente);
        //console.log("Fin de la funcion responderEncuestas")
    return respuestaCliente;
}

// Ejemplo de uso


export default array_respuestasCliente;

