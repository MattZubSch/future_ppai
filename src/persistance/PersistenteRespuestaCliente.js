import axios from 'axios';
import { RespuestaDeCliente } from '../models/RespuestaDeCliente.js';
import { recuperarIdRespuestaPosible } from './PersistenteRespuestaPosible.js';

let respuestaCliente = [];

export function recuperarRespuestaCliente() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/respuestasClientes')
            .then(async response => {
                const respuestaClienteArray = response.data.respuestasClientes || [];

                // Crear instancias de la clase a partir de los datos
                const instanciasPromises = respuestaClienteArray.map(async item => {
                    const respuestaPosible = await recuperarIdRespuestaPosible(item.idRespuesta);
                    return new RespuestaDeCliente(item.idRespuestaCliente, item.fechaEncuesta, respuestaPosible, item.idLlamada);
                });

                // Esperar a que todas las promesas se resuelvan
                const instancias = await Promise.all(instanciasPromises);

                resolve(instancias);
                // console.log(instancias);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}

export default respuestaCliente;