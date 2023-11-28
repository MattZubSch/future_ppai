import axios from 'axios';
import { Encuesta } from '../models/Encuesta.js';
import { recuperarIdPregunta } from './PersistentePregunta.js';

let encuestas = [];

export function recuperarEncuestas() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/encuestas')
            .then(async response => {
                const encuestaArray = response.data.encuestas || [];
                
                // Crear instancias de la clase a partir de los datos
                const instanciasPromises = encuestaArray.map(async item => {
                    const pregunta1 = await recuperarIdPregunta(item.idPregunta1);
                    const pregunta2 = await recuperarIdPregunta(item.idPregunta2);
                    let pregunta3 = null;
                    if (item.idPregunta3 != null) {
                        pregunta3 = await recuperarIdPregunta(item.idPregunta3);
                    } 
                    const preguntas = [pregunta1, pregunta2, pregunta3];
                    return new Encuesta(item.idEncuesta, item.descripcion, item.fechaFinVigencia, preguntas);
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

async function main() {
    encuestas = await recuperarEncuestas();
    // console.log(encuestas);
}

main();

export default encuestas;