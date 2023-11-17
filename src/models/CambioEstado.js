import estados from "./Estado.js";
import Fecha from "../Utilities/Fechas.js";

class CambioEstado{
    constructor(fechaHoraInicio, fechaHoraFin, estado) {
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
        this.estado = estado;
    }
    getFechaHoraInicio(){
        return this.fechaHoraInicio;
    }
    getFechaHoraFin(){
        return this.fechaHoraFin;
    }
    esUltimoEstado(){
        return this.fechaHoraFin === null;
    }
    esEstadoActual(){
        return this.fechaHoraFin === null;
    }
    getNombreEstado(){
        return this.estado.getNombre();
    }
}

export function crearEstadosLlamada(duration, encuestaOk, operarioOk) {
    //Inicializo una variable que especificara la cantidad de estados
    //Esto se calcula en base a si la llamada pasa a ser atendida por un operario o no
    let iteraciones
    let estadosLlamada = [];
    let fechaEnMs = 0;
    let intervalos = [];
    operarioOk === "IVR" ? iteraciones = 2 : iteraciones = 3;
    for (let i = 0; i < iteraciones; i++) {
        //ahora chequeamos la cantidad de iteraciones (dado que si solo tiene dos estados, toda la duracion de la llamada se contendra en el estado Iniciada)
        if (iteraciones === 2){
            //Chequeamos si la llamada se encuentra en su primer iteracion para fijar la fecha de inicio
            //A partir de aqui la duracion de la llamada se calcula en base a la duracion de los estados anteriores
            if (i === 0){
                //Genero una fecha aleatoria entre un periodo de tiempo. La misma se guardara en segundos milisegundos para poder poder operar con ella
                fechaEnMs = Fecha.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31), "ms");
                //Formateo la fecha aleatoria para que quede en el formato que necesito
                let fechaInicio = Fecha.formatearFecha(new Date(fechaEnMs));
                //Genero una fecha de fin en base a la fecha de inicio y la duracion de la llamada
                let fechaFin = Fecha.generarFechaEnBaseaDuracion(fechaEnMs, duration);
                //Formateo la fecha de fin para que quede en el formato que necesito
                fechaFin = Fecha.formatearFecha(new Date(fechaFin));
                //Creo el estado
                let estado = new CambioEstado(fechaInicio, fechaFin, estados[0]);
                //Lo agrego al array de estados
                estadosLlamada.push(estado);
            } else {
                //Genero una fecha de inicio en base a la fecha de fin del estado anterior
                let fechaInicio = estadosLlamada[i-1].getFechaHoraFin();
                //seteamos la fecha fin a null
                let fechaFin = null;
                //creamos el estado
                if (encuestaOk) {
                    let estado = new CambioEstado(fechaInicio, fechaFin, estados[1]);
                    //Lo agrego al array de estados
                    estadosLlamada.push(estado);
                } else {
                    let estado = new CambioEstado(fechaInicio, fechaFin, estados[2]);
                    //Lo agrego al array de estados
                    estadosLlamada.push(estado);
                }
            }
        } else {
            //Si entra aqui es porque son 3 los estados de la llamada
            //Por tanto, deberemos guardar un registro de los intervalos de duracion de cada estado
            if (i === 0){
                //creamos los intervalos de duracion por los que pasara la llamada
                intervalos = Fecha.generarTiemposAleatorios(duration, iteraciones - 1);
                    //console.log(intervalos)
                //Genero una fecha aleatoria entre un periodo de tiempo. La misma se guardara en segundos milisegundos para poder poder operar con ella
                fechaEnMs = Fecha.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31), "ms");
                //Formateo la fecha aleatoria para que quede en el formato que necesito
                let fechaInicio = Fecha.formatearFecha(new Date(fechaEnMs)); 
                //Genero una fecha de fin en base a la fecha de inicio y un punto medio de la duracion de la llamada
                fechaEnMs = Fecha.generarFechaEnBaseaDuracion(fechaEnMs, intervalos[i]);
                //Formateo la fecha de fin para que quede en el formato que necesito
                let fechaFin = Fecha.formatearFecha(new Date(fechaEnMs));
                //Creo el estado
                let estado = new CambioEstado(fechaInicio, fechaFin, estados[0]);
                    //console.log("Estado " + i + " creado.")
                //Lo agrego al array de estados
                estadosLlamada.push(estado);
            } else {
                //Genero una fecha de inicio en base a la fecha de fin del estado anterior
                let fechaInicio = estadosLlamada[i-1].getFechaHoraFin();
                //Genero una fecha de fin en base a la fecha de inicio y un punto medio de la duracion de la llamada siempre que no sera el ultimo estado
                if (i === iteraciones - 1) {
                        //console.log("ingresa al intervalo final")
                    let fechaFin = null;
                    //creamos el estado
                    if (encuestaOk) {
                        let estado = new CambioEstado(fechaInicio, fechaFin, estados[1]);
                        //Lo agrego al array de estados
                        estadosLlamada.push(estado);
                    } else {
                        let estado = new CambioEstado(fechaInicio, fechaFin, estados[2]);
                        //Lo agrego al array de estados
                        estadosLlamada.push(estado);
                    }
                } else {
                    let fechaFin = Fecha.generarFechaEnBaseaDuracion(fechaEnMs, intervalos[i]);
                    //Formateo la fecha de fin para que quede en el formato que necesito
                    fechaFin = Fecha.formatearFecha(new Date(fechaFin));
                    //creamos el estado
                    let estado = new CambioEstado(fechaInicio, fechaFin, estados[3]);
                    //Lo agrego al array de estados
                    estadosLlamada.push(estado);
                }
            }
        }    
    }
    return estadosLlamada;
}

let paq_cambioEstado = crearEstadosLlamada("00:10:00", true, "Operario");



export default paq_cambioEstado;