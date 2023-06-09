import { cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3, cambioEstado_2_1, cambioEstado_2_2, cambioEstado_3_1, cambioEstado_3_2} from "./CambioEstado";

class Llamada{
    constructor(nomCliente, duracion){
        this.nomCliente = nomCliente;
        this.duracion = duracion;
        this.cambioEstado = [];
    }
    esFinalizada(){
        return this.cambioEstado[this.cambioEstado.length-1].estado.esFinalizado();
    }
    mostrarDatos() {
        return [this.nomCliente, this.duracion, this.cambioEstado[this.cambioEstado.length-1].estado.getNombre()]
    }     
}

const llamada_1 = new Llamada("Pepe", "00:10:34");
llamada_1.cambioEstado.push(cambioEstado_1_1, cambioEstado_1_2, cambioEstado_1_3);

const llamada_2 = new Llamada("Juan", "00:02:55");
llamada_2.cambioEstado.push(cambioEstado_2_1, cambioEstado_2_2);

const llamada_3 = new Llamada("Ana", "00:13:02");
llamada_3.cambioEstado.push(cambioEstado_3_1, cambioEstado_3_2);

const llamadas = [llamada_1, llamada_2, llamada_3];

console.log(llamada_1)

export {Llamada, llamadas}   // Exporto las clases y los objetos para poder usarlos en otros archivos