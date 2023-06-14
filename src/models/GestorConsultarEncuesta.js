

class GestorConsultarEncuesta{
    constructor(fecha, fechaInicio, fechaFin, csv, llamadasEncuesta, llamadaSeleccionada){
        this.fecha = fecha;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.csv = csv;
        this.llamadasEncuesta = llamadasEncuesta;
        this.llamadaSeleccionada = llamadaSeleccionada;
    }
    nuevaConsultaEncuesta(){

    }
    tomarPeriodoFecha(fechaInicio, fechaFin){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    buscarLlamadasConEncuestas(){

    }
    getFechaActual(){
        let fechaActual = new Date();
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth() + 1;
        let año = fechaActual.getFullYear();

        return this.fecha = año + '-' + mes + '-' + dia;
        
    }
    
}

const gestor = new GestorConsultarEncuesta(null, null, null, null, null, null);
console.log(gestor.fecha)
console.log(gestor.getFechaActual())