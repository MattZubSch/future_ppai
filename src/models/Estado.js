class Estado{
    constructor(nombre) {
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

module.exports = {Estado, estado_iniciada, estado_finalizada, estado_cancelada, estado_enCurso}