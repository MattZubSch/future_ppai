import array_llamadas from "./Llamada.js";

class GestorConsultarEncuesta{
    constructor(fecha, fechaInicio, fechaFin, csv, llamadasEncuesta, llamadaSeleccionada){
        this.fecha = fecha;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.csv = csv;
        this.llamadasEncuesta = [];
        this.llamadaSeleccionada = llamadaSeleccionada;
    }
    nuevaConsultaEncuesta(){
        return true
    }
    tomarPeriodoFecha(fechaInicio, fechaFin){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    buscarLlamadasConEncuestas(){
        this.llamadasEncuesta = [];
        array_llamadas.forEach(llamada => {
            if (llamada.esDePeriodo(this.fechaInicio, this.fechaFin)){
                // console.log("resultado de esFinalizada: " + llamada.esFinalizada())
                if (llamada.esFinalizada()) {
                    if (llamada.esEncuestaRespondida()){
                    this.llamadasEncuesta.push(llamada);
                }
                }
            }
        })
        return this.llamadasEncuesta;
    }
    getFechaActual(){
        let fechaActual = new Date();
        let dia = fechaActual.getDate();
        if (dia < 10){
            dia = "0" + dia;
        }
        let mes = fechaActual.getMonth() + 1;
        if (mes < 10){
            mes = "0" + mes;
        }
        let año = fechaActual.getFullYear();
        return this.fecha = año + '-' + mes + '-' + dia; 
    }
    tomarSeleccionLlamada(llamadaSeleccionada){
        this.llamadaSeleccionada = llamadaSeleccionada;
        console.log(this.llamadaSeleccionada)
    }
    obtenerDatosLlamadaSeleccionada(){
        let datosLlamada = this.llamadaSeleccionada.mostrarDatos()
        let respuestaCliente = this.llamadaSeleccionada.mostrarRespuestasCliente();
        let punteros = []
        punteros.push(respuestaCliente)
        console.log("objeto punteros: " + punteros)
        let preguntas = this.llamadaSeleccionada.mostrarPreguntas();
        let encuesta = this.llamadaSeleccionada.mostrarEncuesta();
        return {datosLlamada, respuestaCliente, preguntas, encuesta};
    }
    
}

const gestor = new GestorConsultarEncuesta(null, null, null, null, null, null);

export default gestor;


