// Clase IteradorConcreto
class IteradorConcreto {
    constructor(elementos) {
        this.elementos = elementos;
        this.indiceActual = 0;
    }

    siguiente() {
        return this.indiceActual < this.elementos.length ?
            { valor: this.elementos[this.indiceActual++], done: false } :
            { done: true };
    }
}