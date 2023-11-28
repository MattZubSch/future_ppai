import axios from 'axios';
import { RespuestaPosible } from '../models/RespuestaPosible.js';

export function recuperarIdRespuestaPosible(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:4000/api/respuestasPosibles/${id}`)
            .then(response => {
                const item = response.data.respuestaPosible || [];
                const instancia = new RespuestaPosible(item.idRespuestaPosible, item.descripcion, item.valor, item.idPregunta);
                resolve(instancia);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}

export function recuperarRespuestasPosibles() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/respuestasPosibles')
            .then(response => {
                const respuestaPosibleArray = response.data.respuestasPosibles || [];

                // Crear instancias de la clase a partir de los datos
                const instancias = respuestaPosibleArray.map(item => {
                    return new RespuestaPosible(item.idRespuestaPosible, item.descripcion, item.valor, item.idPregunta);
                });

                resolve(instancias);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}
