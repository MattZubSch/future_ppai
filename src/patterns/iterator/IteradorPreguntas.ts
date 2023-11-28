import { IIterator } from "./IIterator";
import { Pregunta } from "../../models/Pregunta";

export class IteradorPreguntas implements IIterator<Pregunta> {
    private preguntas: Pregunta[];
    private indice: number;

    constructor(preguntas: Pregunta[]) {
      this.preguntas = preguntas;
      this.indice = 0;
    }
    primero(): void {
        this.indice = 0;
    }
  
    haTerminado(): boolean {
        return this.indice >= this.preguntas.length;
    }
    actual(): Pregunta {
        return this.preguntas[this.indice];
    }    
    cumpleFiltro(filtros: any): boolean {
        const preguntaActual = this.actual();     
        let respuestasPosibles = preguntaActual.getRtaPosibles();
        for (const respuesta of filtros.respuestas) {
            console.log("respuesta del iterador preguntas")
            console.log(respuesta);
            if (!respuestasPosibles.includes(respuesta)) {
                console.log("respuesta no posible");
                return false;
            }
        }
        return true;
    } 
    siguiente(): void {
        this.indice++;
      }
    }