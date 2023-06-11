class Encuesta{
    constructor(descripcion, fechaFinVigencia) {
        this.descripcion = descripcion;
        this.fechaFinVigencia = fechaFinVigencia;
    }
    getDescripcionEncuesta(){
        return this.descripcion;
    }
}

const encuesta_1 = new Encuesta("Encuesta de satisfacción", "2023-12-31 09:00:00");
const encuesta_2 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
const encuesta_3 = new Encuesta("Encuesta de atención del operario", "2023-12-31 09:00:00");
const encuesta_4 = new Encuesta("Encuesta de satisfacción", "2023-12-31 09:00:00");
const encuesta_5 = new Encuesta("Encuesta de calidad del servicio", "2023-12-31 09:00:00");
const encuesta_6 = new Encuesta("Encuesta de satisfaccion", "2023-12-31 09:00:00");
const encuesta_7 = new Encuesta("Encuesta de atención del operario", "2023-04-30 09:00:00");
const encuesta_8 = new Encuesta("Encuesta de satisfaccion", "2023-04-30 09:00:00");

const array_encuestas = [encuesta_1, encuesta_2, encuesta_3, encuesta_4, encuesta_5, encuesta_6, encuesta_7, encuesta_8];

export default array_encuestas;   // Exporto las clases y los objetos para poder usarlos en otros archivos
