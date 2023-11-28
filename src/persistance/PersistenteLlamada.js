import axios from 'axios';
import { Llamada } from '../models/Llamada.js';
import { recuperarClientes } from './PersistenteCliente.js';
import { recuperarCambioEstado } from './PersistenteCambioEstado.js';
import { recuperarRespuestaCliente } from './PersistenteRespuestaCliente.js';

// eslint-disable-next-line
let arrayLlamadas = null;
// eslint-disable-next-line

export async function recuperarLlamadas() {
    try {
        return axios.get('http://localhost:4000/api/llamadas')
            .then(async response => {
                const llamadasArray = response.data.llamadas || [];

        // Recuperar clientes
        const clientesArray = await recuperarClientes();
        //recuperar cambios de estado
        const cambiosEstadoArray = await recuperarCambioEstado();
        //recuperar respuestas de cliente
        const respuestasClienteArray = await recuperarRespuestaCliente();
        
        const instancias = llamadasArray.map(item => {
            const clienteFilter = clientesArray.filter(cliente => cliente.id === item.idCliente);
            const cambioEstadoFilter = cambiosEstadoArray.filter(cambioEstado => cambioEstado.idLlamada === item.idLlamada);
            const respuestaClienteFilter = respuestasClienteArray.filter(respuestaCliente => respuestaCliente.idLlamada === item.idLlamada);
            return new Llamada(item.descripcionOperador, item.detalleAccionRequerida, item.duracion, item.encuestaEnviada, item.observacionAuditor, clienteFilter[0], cambioEstadoFilter, respuestaClienteFilter);
        });
        // console.log("log de instancias: ")
        // console.log(instancias)
        // Establecer las instancias en el estado
        arrayLlamadas = instancias;
        return instancias;

        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            return [];
        });   
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return Promise.resolve([]); // Devuelve una promesa resuelta con un array vacío
    }
}

async function main() {
    arrayLlamadas = await recuperarLlamadas();
    // console.log(arrayLlamadas);
}

main();

// Exporta la promesa, no la variable directamente
export default arrayLlamadas