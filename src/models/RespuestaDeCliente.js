export class RespuestaDeCliente{
    constructor(id, fechaEncuesta, respuesta, idLlamada){
        this.id = id
        this.fechaEncuesta = fechaEncuesta;
        this.respuesta = respuesta;
        this.idLlamada = idLlamada
    }
    getRespuestaDeCliente(){
        return this.respuesta.getDescripcionRta();
    }
}

{/*
//Creo el Array que contendra todos los objetos RespuestaDeCliente
let array_respuestasCliente = [];

//Funcion que respondera a las preguntas de todas las encuestas
export function responderEncuestas(fechaFinVigencia, fechaFinLlamada){
    let encuestaResponder = crearEncuesta(fechaFinVigencia);
    console.log("Datos de la Encuesta (correspondiente a la llamada de abajo)")
    console.log(encuestaResponder)
    console.log("Datos de las preguntas de la encuesta (correspondiente a la llamada de abajo)")
    console.log(encuestaResponder.preguntas)
    console.log("===============================================================")
    //inicio el array que contendra las respuestas de cada encuesta (array de respuestas totales)
    let respuestaCliente = [];
    //Inicializo un array que contendra las respuestas de cada encuesta (array de respuestas parciales)
    //Ciclo for que recorrera todas las preguntas existentes de cada encuesta
    for (let i = 0; i < encuestaResponder.preguntas.length; i++) {
        //obtener la cantidad de respuestas posibles de cada pregunta
        const cantRtaPosibles = encuestaResponder.preguntas[i].rtaPosibles.length;
        //generar un numero aleatorio entre 0 y la cantidad de respuestas posibles, el cual corresponderá al indice de la respuesta que se eligio
        const rtaPosibleAleatoria = Math.floor(Math.random() * cantRtaPosibles);
        //crear un objeto respuesta que contenga la fecha en la que se respondio y la respuesta elegida. Esto se realizara para cada pregunta de la encuesta actual. 
        //Note: revisar que la fecha aleatoria se mantenga igual (no se vuelva a generar una fecha aleatoria para cada pregunta de una misma encuesta)
        let respuesta = new RespuestaDeCliente(0, fechaFinLlamada, encuestaResponder.preguntas[i].rtaPosibles[rtaPosibleAleatoria], 0);
        //agregar la respuesta al array de respuestas de la encuesta actual
        respuestaCliente.push(respuesta);
    }
    //terminado el recorrido por las preguntas, agregar el array de respuestas parciales al Array principal
    array_respuestasCliente.push(respuestaCliente);
    return respuestaCliente;
}


export default array_respuestasCliente;

*/}