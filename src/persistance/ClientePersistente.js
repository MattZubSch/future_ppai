import Cliente from '../db/models/Cliente_db.js';
import SuperObjetoPersistente from './SuperObjetoPersistente.js';

class ClientePersistente extends SuperObjetoPersistente {
    constructor() {
      super(Cliente); // Pasar el modelo al constructor de la clase base
    }
}

// Ejemplo de uso
const clientePersistente = new ClientePersistente();

// Configurar datos en el objeto y realizar operaciones de persistencia
clientePersistente.datos = {
  dni: '123456789',
  nombreCompleto: 'Juan Pérez',
  nroCelular: '555-1234',
};

await clientePersistente.desmaterializar(); // Guardar en la base de datos

// Crear otra instancia de ClientePersistente
const otroClientePersistente = new ClientePersistente();

// Materializar el objeto desde la base de datos usando el mismo DNI
await otroClientePersistente.materializar('123456789');

console.log(otroClientePersistente.datos); // Debería imprimir el objeto con los datos previamente guardados

