import axios from 'axios';
import { Pregunta } from '../models/Pregunta.js';
import { recuperarRespuestasPosibles } from './PersistenteRespuestaPosible.js';

export async function recuperarIdPregunta(id) {
    //recuperar las respuestas posibles

    const respuestaPosible = await recuperarRespuestasPosibles();

    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:4000/api/preguntas/${id}`)
            .then(response => {
                const item = response.data.pregunta || [];
                
                const resPosibleFilter = respuestaPosible.filter(res => res.idPregunta === item.idPregunta);
                // console.log(resPosibleFilter)

                const instancia = new Pregunta(item.idPregunta, item.descripcion);
                
                for (let i = 0; i < resPosibleFilter.length; i++) {
                    instancia.rtaPosibles.push(resPosibleFilter[i]);
                }
                
                resolve(instancia);

            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
            });
    });
}