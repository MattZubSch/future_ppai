import axios from 'axios';
import { Estado } from '../models/Estado.js';

export function recuperarEstados() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/estados')
            .then(response => {
                const estadosArray = response.data.estados || [];

                // Crear instancias de la clase a partir de los datos
                const instancias = estadosArray.map(item => {
                    return new Estado(item.idEstado, item.nombre);
                });

                resolve(instancias);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}

// async function main() {
//     const estados = await recuperarEstados();
//     console.log(estados);
// }

// main();