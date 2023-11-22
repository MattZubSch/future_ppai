import { IIterator } from "./IIterator";

export interface IAgregado<T> {
    crearIterador(elements: T[]): IIterator<T>;
  }