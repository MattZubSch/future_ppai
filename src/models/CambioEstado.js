import estados from "./Estado";

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

const cambioEstado_1_1 = new CambioEstado("2023-05-25 08:48:50", "2023-05-25 08:50:31", estados[0]);
const cambioEstado_1_2 = new CambioEstado("2023-05-25 08:50:31", "2023-05-25 08:59:24", estados[3]);
const cambioEstado_1_3 = new CambioEstado("2023-05-25 08:59:24", null, estados[1]);

const cambioEstado_2_1 = new CambioEstado("2023-05-25 10:16:02", "2023-05-25 10:18:57", estados[0]);
const cambioEstado_2_2 = new CambioEstado("2023-05-25 10:18:57", null, estados[2]);

const cambioEstado_3_1 = new CambioEstado("2023-05-25 10:26:00", "2023-05-25 10:39:02", estados[0]);
const cambioEstado_3_2 = new CambioEstado("2023-05-25 10:39:02", null, estados[1]);

export {CambioEstado, cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3, cambioEstado_2_1, cambioEstado_2_2, cambioEstado_3_1, cambioEstado_3_2}   // Exporto las clases y los objetos para poder usarlos en otros archivos

