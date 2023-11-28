import Fecha from "../Utilities/Fechas.js";

export class Llamada{
    constructor(descripcionOperador, detalleAccionRequerida, duracion, encuestaEnviada, observacionAuditor, cliente, cambioEstado, respuestaCliente){
        this.descripcionOperador = descripcionOperador;
        this.detalleAccionRequerida = detalleAccionRequerida;
        this.duracion = duracion;
        this.encuestaEnviada = Boolean(encuestaEnviada);
        this.observacionAuditor = observacionAuditor;
        this.cliente = cliente;
        this.cambioEstado = cambioEstado;
        this.respuestaCliente = respuestaCliente;
    }
    esDePeriodo(fechaInicioOrig, fechaFinOrig){
        let fechaInicio = Fecha.formatearDate(fechaInicioOrig);
        let fechaFin = Fecha.formatearDate(fechaFinOrig);
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
            if (cambioEstado.esUltimoEstado()){
                if (cambioEstado.estado.esFinalizada()){
                    resultado = true;
                };
            }})
        return resultado;
    }  
    esEncuestaRespondida(){
        return this.encuestaEnviada
    }
    getDuracion(){
        return this.duracion;
    } 
    mostrarDatos() {
        let estado = null
        let duracion = this.getDuracion();
        let cliente = this.cliente.getNombre();
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.esEstadoActual()){
                estado = cambioEstado.estado.getNombre();
            }})
        let datosLlamada = {cliente: cliente, estado: estado, duracion: duracion};
        return datosLlamada;
    }
    mostrarRespuestasCliente(){
        let respuestas = [];
        this.respuestaCliente.forEach(rtaCliente => {
            respuestas.push(rtaCliente.getRespuestaDeCliente())
        })
        return respuestas;
    }
    mostrarPreguntas(){
        return this.encuestaEnviada.getRespuestasPreguntas();
    }
    

}