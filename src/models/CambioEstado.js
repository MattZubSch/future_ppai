import { estado_cancelada, estado_enCurso, estado_finalizada, estado_iniciada} from "./Estado";

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

const cambioEstado_1_1 = new CambioEstado("2023-05-25 08:48:50", "2023-05-25 08:50:31", estado_iniciada);
const cambioEstado_1_2 = new CambioEstado("2023-05-25 08:50:31", "2023-05-25 08:59:24", estado_enCurso);
const cambioEstado_1_3 = new CambioEstado("2023-05-25 08:59:24", null, estado_finalizada);

const cambioEstado_2_1 = new CambioEstado("2023-05-25 10:16:02", "2023-05-25 10:18:57", estado_iniciada);
const cambioEstado_2_2 = new CambioEstado("2023-05-25 10:18:57", null, estado_cancelada);

const cambioEstado_3_1 = new CambioEstado("2023-05-25 10:26:00", "2023-05-25 10:39:02", estado_iniciada);
const cambioEstado_3_2 = new CambioEstado("2023-05-25 10:39:02", null, estado_finalizada);

export {CambioEstado, cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3, cambioEstado_2_1, cambioEstado_2_2, cambioEstado_3_1, cambioEstado_3_2}   // Exporto las clases y los objetos para poder usarlos en otros archivos

