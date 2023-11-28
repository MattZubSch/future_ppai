import { IIterator } from "./IIterator";
import { Encuesta } from "../../models/Encuesta"

export class IteradorEncuestas implements IIterator<Encuesta> {
    private encuestas: Encuesta[];
    private indice: number;

    constructor(encuestas: Encuesta[]) {
      this.encuestas = encuestas;
      this.indice = 0;
    }

    primero(): void {
      this.indice = 0;
    }

    haTerminado(): boolean {
      return this.indice >= this.encuestas.length;
    }

    actual(): Encuesta {
      return this.encuestas[this.indice];
    }   

    cumpleFiltro(filtros: any): boolean {
        const encuestaActual = this.actual();

        // Verificar cada respuesta del filtro
        // for (const respuesta of filtros.respuestas) {
        //   console.log("respuesta del iterador encuestas")
        //   console.log(respuesta);
            const resultado = encuestaActual.esRespuestaPosible(filtros.respuestas);

            // Si alguna respuesta no es posible, la encuesta no cumple el filtro
            if (!resultado) {
                return false;
            }
        // }

        // Si todas las respuestas son posibles, la encuesta cumple el filtro
        return true;
    }

    siguiente(): void {
      this.indice++;
    }
}
