import crearEncuesta from "./src/models/Encuesta.js";
import responderEncuesta from "./src/models/RespuestaDeCliente.js";
import array_respuestasCliente from "./src/models/RespuestaDeCliente.js";

function prueba() {
    crearEncuesta()
    responderEncuesta()
    console.log(array_respuestasCliente)
}

