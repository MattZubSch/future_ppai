import { CambioEstado, cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3, cambioEstado_2_1, cambioEstado_2_2, cambioEstado_3_1, cambioEstado_3_2} from './CambioEstado';


class Llamada{
    constructor(nomCliente, duracion){
        this.nomCliente = nomCliente;
        this.duracion = duracion;
        this.cambioEstado = [];
    }
    esFinalizada(){
        return this.cambiosEstado[this.cambioEstado.length-1].estado.esFinalizado();
    }

}

const llamada_1 = new Llamada("Pepe", "00:10:34", [cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3]);

const llamada_2 = new Llamada("Juan", "00:02:55", [cambioEstado_2_1, cambioEstado_2_2]);

const llamada_3 = new Llamada("Ana", "00:13:02", [cambioEstado_3_1, cambioEstado_3_2]);

const llamadas = [llamada_1, llamada_2, llamada_3];


module.exports = {Llamada, llamadas}   // Exporto las clases y los objetos para poder usarlos en otros archivos