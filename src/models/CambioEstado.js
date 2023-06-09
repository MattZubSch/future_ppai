import { Estado, estado_cancelada, estado_enCurso, estado_finalizada, estado_iniciada} from "./Estado";

class CambioEstado{
    constructor(fechaHoraInicio, fechaHoraFin, estado) {
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
        this.estado = estado;
    }
    getFechaHoraInicio(){
        return this.fechaHoraInicio;
    }
    getFechaHoraFin(){
        return this.fechaHoraFin;
    }
    esUltimoEstado(){
        return this.fechaHoraFin === null;
    }
}

const cambioEstado_1_1 = new CambioEstado(new Date(2020, 1, 1, 10, 0, 0), new Date(2020, 1, 1, 10, 5, 0), estado_iniciada);
const cambioEstado_1_2 = new CambioEstado(new Date(2020, 1, 1, 10, 5, 0), new Date(2020, 1, 1, 10, 10, 0), estado_enCurso);
const cambioEstado_1_3 = new CambioEstado(new Date(2020, 1, 1, 10, 10, 0), null, estado_finalizada);

const cambioEstado_2_1 = new CambioEstado(new Date(2020, 1, 1, 16, 47, 0), new Date(2020, 1, 1, 16, 49, 0), estado_iniciada);
const cambioEstado_2_2 = new CambioEstado(new Date(2020, 1, 1, 16, 49, 0), null, estado_cancelada);

const cambioEstado_3_1 = new CambioEstado(new Date(2020, 1, 1, 17, 7, 0), new Date(2020, 1, 1, 16, 49, 0), estado_iniciada);
const cambioEstado_3_2 = new CambioEstado(new Date(2020, 1, 1, 17, 20, 0), null, estado_finalizada);

module.exports = {CambioEstado, cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3, cambioEstado_2_1, cambioEstado_2_2, cambioEstado_3_1, cambioEstado_3_2}   // Exporto las clases y los objetos para poder usarlos en otros archivos

