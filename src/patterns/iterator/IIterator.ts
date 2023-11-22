export interface IIterator<T> {
    primero(): void;
    haTerminado(): boolean;
    actual(): T;
    cumpleFiltro(filtros: Object): boolean;
    siguiente(): void;
  }
