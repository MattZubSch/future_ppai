import { IIterator } from "./IIterator";
import { Llamada } from "../../models/Llamada"

export class IteradorLlamada implements IIterator<Llamada> {
    private llamadas: Llamada[];
    private indice: number;
  
    constructor(llamadas: Llamada[]) {
      this.llamadas = llamadas;
      this.indice = 0;
    }
  
    primero(): void {
      this.indice = 0;
    }
  
    haTerminado(): boolean {
      return this.indice >= this.llamadas.length;
    }
  
    actual(): Llamada {
      return this.llamadas[this.indice];
    }
  
    cumpleFiltro(filtros: Object): boolean {
      const llamadaActual = this.actual();
  
      if ("esDePeriodo" in filtros) {
        const filtroEsDePeriodo = filtros as { esDePeriodo: { fechaInicioOrig: string; fechaFinOrig: string } };
        const { fechaInicioOrig, fechaFinOrig } = filtroEsDePeriodo.esDePeriodo;

        if (!llamadaActual.esDePeriodo(fechaInicioOrig, fechaFinOrig)) {
          return false;
        }
      }
  
      if ("esFinalizada" in filtros) {
        if (!llamadaActual.esFinalizada()) {
          return false;
        }
      }
  
      if ("esEncuestaRespondida" in filtros) {
        if (!llamadaActual.esEncuestaRespondida()) {
          return false;
        }
      }
  
      // Puedes agregar más lógica de filtrado según sea necesario
  
      return true;
    }
  
    siguiente(): void {
      this.indice++;
    }
  }