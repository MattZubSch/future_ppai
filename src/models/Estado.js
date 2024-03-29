export class Estado{
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    esFinalizada(){
        return this.nombre === "Finalizada";
    }
}

const estado_iniciada = new Estado("Iniciada");

const estado_finalizada = new Estado("Finalizada");

const estado_cancelada = new Estado("Cancelada");

const estado_enCurso = new Estado("En curso");

const estados = [estado_iniciada, estado_finalizada, estado_cancelada, estado_enCurso];

// Exporto las clases y los objetos para poder usarlos en otros archivos
export default estados