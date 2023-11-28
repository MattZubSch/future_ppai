import axios from 'axios';
import Cliente from '../models/Cliente.js';

export function recuperarClientes() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/clientes')
            .then(response => {
                const clientesArray = response.data.clientes || [];
                
                // Crear instancias de la clase a partir de los datos
                const instancias = clientesArray.map(item => {
                    return new Cliente(item.idCliente, item.dni, item.nombreCompleto, item.nroCelular);
                });

                resolve(instancias);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}
