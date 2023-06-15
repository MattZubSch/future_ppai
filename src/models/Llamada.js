import paq_cambioEstado from "./CambioEstado.js";
import array_clientes from "./Cliente.js";
import array_paq_rtaCliente from "./RespuestaDeCliente.js";
import array_encuestas from "./Encuesta.js";
import { type } from "@testing-library/user-event/dist/type/index.js";

class Llamada{
    constructor(descripcionOperador, detalleAccionRequerida, duracion, encuestaEnviada, observacionAuditor, cliente, cambioEstado, respuestaCliente){
        this.descripcionOperador = descripcionOperador;
        this.detalleAccionRequerida = detalleAccionRequerida;
        this.duracion = duracion;
        this.encuestaEnviada = encuestaEnviada;
        this.observacionAuditor = observacionAuditor;
        this.cliente = cliente;
        this.cambioEstado = cambioEstado;
        this.respuestaCliente = respuestaCliente;
    }
    esDePeriodo(fechaInicio, fechaFin){
        let fechaHoraInicio = "0"
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.getFechaHoraInicio() < fechaHoraInicio || fechaHoraInicio === "0"){
                fechaHoraInicio = cambioEstado.getFechaHoraInicio();
                }   
            })
        
        if (fechaHoraInicio >= fechaInicio && fechaHoraInicio <= fechaFin){
            return true;
        }
    }
    esFinalizada(){
        let resultado = false;
        this.cambioEstado.forEach(cambioEstado => {
            // console.log("resultado es ultimo estado: " + cambioEstado.esUltimoEstado())
            if (cambioEstado.esUltimoEstado()){
                // console.log("resultado es finalizado: " + cambioEstado.estado.esFinalizada())
                if (cambioEstado.estado.esFinalizada()){
                    // console.log("entro a esFinalizada")
                    resultado = true;
                };
            }})
        return resultado;
    }
    esEncuestaRespondida(){
        let resultado = false;
        if (this.encuestaEnviada === null){
                resultado = false;
        } else {
            // console.log("cae directo aca")
            resultado = true;
        }
        return resultado;
    }
    getDuracion(){
        return this.duracion;
    } 
    mostrarDatos() {
        // console.log("entra?")
        let estado = null
        let duracion = this.getDuracion();
        let cliente = this.cliente.getNombre();
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.esEstadoActual()){
                estado = cambioEstado.estado.getNombre();
            }})
        return [cliente, estado, duracion];
    }
    mostrarRespuestasCliente(){
        let respuestas = [];
        // console.log("tipo respuestas al inicio: " + Array.isArray(respuestas))
        // console.log(this.respuestaCliente);
        this.respuestaCliente.forEach(rtaCliente => {
            console.log(rtaCliente)
            let valorRta = rtaCliente.respuesta.descripcion;
            // console.log("respuesta del cliente: " + typeof valorRta)
            respuestas.push(valorRta);
            // console.log("array al momento: " + respuestas)
        })
        // console.log("resp cliente desde llamada: " + typeof respuestas)
        return respuestas;
    }
    mostrarPreguntas(){
        return this.encuestaEnviada.getRespuestasPreguntas();
    }
    mostrarEncuesta(){
        return this.encuestaEnviada.getDescripcionEncuesta();
    }

}

//estado inicial -> finalizado. Encuesta de Satisfaccion
const llamada_1 = new Llamada("IVR", null, "00:05:18", array_encuestas[0], null, array_clientes[0], paq_cambioEstado[0], array_paq_rtaCliente);
// llamada_1.respuestaCliente.concat(array_paq_rtaCliente[0]);

//estado inicial -> finalizado. Encuesta de calidad
const llamada_2 = new Llamada("IVR", null, "00:16:21", array_encuestas[1], null, array_clientes[1], paq_cambioEstado[1], array_paq_rtaCliente[1]);
// llamada_2.respuestaCliente.concat(array_paq_rtaCliente[1]);

//inicial -> en curso -> finalizado. Encuesta de calidad    
const llamada_3 = new Llamada("Operador N°19", "Se bloqueo su tarjeta debido a un robo", "00:21:40", array_encuestas[2], null, array_clientes[2], paq_cambioEstado[2], array_paq_rtaCliente[2]);
// llamada_3.respuestaCliente.concat(array_paq_rtaCliente[2]);

//inicial -> cancelada
const llamada_4 = new Llamada("IVR", null, "00:02:48", null, null, array_clientes[3], paq_cambioEstado[3], null);

//inicial -> finalizado. Encuesta de satisfaccion
const llamada_5 = new Llamada("IVR", null, "00:05:32", array_encuestas[3], null, array_clientes[4], paq_cambioEstado[4], array_paq_rtaCliente[3]);
// llamada_5.respuestaCliente.concat(array_paq_rtaCliente[3]);

//inicial -> en curso -> finalizado. Encuesta de atencion del operador
const llamada_6 = new Llamada("Operador N°8", "Se le informo el motivo de bloqueo de su cuenta", "00:21:16", array_encuestas[4], "El operador se desempeño correctamente", array_clientes[5], paq_cambioEstado[5], array_paq_rtaCliente[4]);
// llamada_6.respuestaCliente.concat(array_paq_rtaCliente[4]);

//inicial -> en curso -> cancelada
const llamada_7 = new Llamada("Operador N°5", "Se le explico la imposibilidad de realizar el pago", "00:11:38", null, null, array_clientes[6], paq_cambioEstado[6], null);

//inicial -> finalizada. Encuesta de calidad
const llamada_8 = new Llamada("IVR", null, "00:09:05", array_encuestas[5], null, array_clientes[7], paq_cambioEstado[7], array_paq_rtaCliente[5]);
// llamada_8.respuestaCliente.concat(array_paq_rtaCliente[5]);


//inicial -> en curso -> finalizado. Encuesta de atencion del operador (encuesta 8)
const llamada_9 = new Llamada("Operador N°20", "Se le explico la imposibilidad de acceder a un prestamo", "00:37:02", array_encuestas[7], "El operador tardo mucho en responder. Explico de forma muy lenta. No sabia la respuesta de memoria", array_clientes[8], paq_cambioEstado[8], array_paq_rtaCliente[7]);
// llamada_9.respuestaCliente.concat(array_paq_rtaCliente[7]);

//inicial -> finalizada. Encuesta de satisfaccion (encuesta 7)
const llamada_10 = new Llamada("IVR", null, "00:02:49", array_encuestas[6], null, array_clientes[9], paq_cambioEstado[9], array_paq_rtaCliente[6]);
// llamada_10.respuestaCliente.concat(array_paq_rtaCliente[6]);

//inicial -> cancelada
const llamada_11 = new Llamada("IVR", null, "00:04:27", null, null, array_clientes[10], paq_cambioEstado[10], null);

//array de todas las llamadas
const array_llamadas = [llamada_1, llamada_2, llamada_3, llamada_4, llamada_5, llamada_6, llamada_7, llamada_8, llamada_9, llamada_10, llamada_11];

export default array_llamadas;