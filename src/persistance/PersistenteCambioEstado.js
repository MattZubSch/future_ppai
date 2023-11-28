import axios from "axios";
import { CambioEstado } from "../models/CambioEstado.js";
import { recuperarEstados } from "./PersistenteEstado.js";

export async function recuperarCambioEstado() {
    //recuperar los estados
    const estadosArray = await recuperarEstados();
    // console.log(estadosArray)

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/api/cambiosestados')
            .then(response => {
                const cambioEstadoArray = response.data.cambioEstado || [];

                // Crear instancias de la clase a partir de los datos
                const instancias = cambioEstadoArray.map(item => {
                    //buscar el estado
                    const estado = estadosArray.filter(estado => estado.id === item.idEstado);
                    //crear la instancia
                    return new CambioEstado(item.idCambioEstado, item.fechaHoraInicio, item.fechaHoraFin, estado[0], item.idLlamada);
                });

                resolve(instancias);
                // console.log(instancias);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                reject(error);
        });
    }
)};

async function main() {
    const llamadas = await recuperarCambioEstado();
    console.log(llamadas);
}

// main();