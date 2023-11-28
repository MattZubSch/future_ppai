import { IteradorEncuestas } from "../patterns/iterator/IteradorEncuestas.ts";
import { IAgregado } from "../patterns/iterator/IAgregado.js";
import { Pregunta } from "./Pregunta.js";

export class Encuesta extends IAgregado{
    constructor(id, descripcion, fechaFinVigencia, preguntas) {
        super();
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
    static crearIterador(arrayLlamadas) {
        console.log(arrayLlamadas)
        return new IteradorEncuestas(arrayLlamadas);
    }
    static buscarEncuesta(encuestas, respuestas){
        //defino array que guarde las preguntas filtradas
        let retorno = false;
        let preguntas = [];
        console.log("contenido de respuestas")
        console.log(respuestas)
        //creo el iterador de encuestas
        const iterador = Encuesta.crearIterador(encuestas);
        //posiciono el iterador en el primer elemento
        iterador.primero();
        //mientras el iterador no haya terminado
        while (!iterador.haTerminado()) {
            //guardo la encuesta actual
            let encuestaActual = iterador.actual();
            //verifico si la encuesta actual contiene las respuestas seleccionadas
            if (iterador.cumpleFiltro({
                respuestas: respuestas
            })) {
                //si la encuesta actual contiene las respuestas seleccionadas, guardo la encuesta actual
                retorno = encuestaActual;
                //guardo las preguntas de la encuesta actual
                preguntas = encuestaActual.getPreguntas();
                //cargo la descripcion de la encuesta actual
                let descEncuesta = encuestaActual.getDescripcionEncuesta();
                console.log("entra hasta aca?")
                console.log(preguntas)
                let descPreguntas = preguntas
                    .filter(pregunta => pregunta !== null) // Filtrar elementos nulos
                    .map(pregunta => pregunta.getDescripcion());
                retorno = {encuesta: descEncuesta, preguntas: descPreguntas, respuestaCliente: respuestas, datosLlamada: null}
                break;
            }
            //si la encuesta actual no contiene las respuestas seleccionadas, avanzo al siguiente elemento
            iterador.siguiente();
            }

        //retorno la encuesta actual
        return retorno;
    }
    esRespuestaPosible(respuesta){
        let rtaPosible = false;
        this.preguntas.forEach(pregunta => {
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