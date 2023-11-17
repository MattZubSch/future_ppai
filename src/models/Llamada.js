import Fecha from "../Utilities/Fechas.js";
import { crearEstadosLlamada } from "./CambioEstado.js";
import { responderEncuestas } from "./RespuestaDeCliente.js";
import { crearCliente } from "./Cliente.js";


class Llamada{
    constructor(descripcionOperador, detalleAccionRequerida, duracion, encuestaEnviada, observacionAuditor, cliente, cambioEstado, respuestaCliente){
        this.descripcionOperador = descripcionOperador;
        this.detalleAccionRequerida = detalleAccionRequerida;
        this.duracion = duracion;
        this.encuestaEnviada = Boolean(encuestaEnviada);
        this.observacionAuditor = observacionAuditor;
        this.cliente = cliente;
        this.cambioEstado = cambioEstado;
        this.respuestaCliente = respuestaCliente;
    }
    esDePeriodo(fechaInicioOrig, fechaFinOrig){
        let fechaInicio = Fecha.formatearDate(fechaInicioOrig);
        let fechaFin = Fecha.formatearDate(fechaFinOrig);
        let fechaHoraInicio = "0"
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.getFechaHoraInicio() < fechaHoraInicio || fechaHoraInicio === "0"){
                fechaHoraInicio = cambioEstado.getFechaHoraInicio();
                }   
            })
        
        if (fechaHoraInicio >= fechaInicio && fechaHoraInicio <= fechaFin){
            return true;
        }
    }
    esFinalizada(){
        let resultado = false;
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.esUltimoEstado()){
                if (cambioEstado.estado.esFinalizada()){
                    resultado = true;
                };
            }})
        return resultado;
    }  
    esEncuestaRespondida(){
        return this.encuestaEnviada
    }
    getDuracion(){
        return this.duracion;
    } 
    mostrarDatos() {
        let estado = null
        let duracion = this.getDuracion();
        let cliente = this.cliente.getNombre();
        this.cambioEstado.forEach(cambioEstado => {
            if (cambioEstado.esEstadoActual()){
                estado = cambioEstado.estado.getNombre();
            }})
        let datosLlamada = {cliente: cliente, estado: estado, duracion: duracion};
        return datosLlamada;
    }
    mostrarRespuestasCliente(){
        let respuestas = [];
        this.respuestaCliente.forEach(rtaCliente => {
            respuestas.push(rtaCliente.getRespuestaDeCliente())
        })
        return respuestas;
    }
    mostrarPreguntas(){
        return this.encuestaEnviada.getRespuestasPreguntas();
    }
    

}

//creamos el array de llamadas para exportarlas
const array_llamadas = [];
//funcion que generará todos los componentes de la llamada
function generarLlamada() {
    //funcion para elegir los parametros de forma aleatoria segun cierta proporcion
    function elegirParam(num) {
        const aleatorio = Math.random();
        if (aleatorio < num) {
            return "Opcion 1";
        } else {
            return "Opcion 2";
        }
    }
    //Definimos el valor del operador de la llamada
    let descripcionOperador = elegirParam(0.75);
    //seteamos el Detalle de la accion requerida y la observacion del auditor
    let detalleAccionRequerida = null;
    let observacionAuditor = null;
    //seteamos el operador de la llamada
    if (descripcionOperador === "Opcion 1") {
        descripcionOperador = "IVR";
    } else {
        descripcionOperador = "Operador N°" + Math.ceil(Math.random() * 20) + "";
        //array de posibles acciones de soporte tecnico
        const acciones_soporte_tecnico = [
            "1. Verificar el saldo de la tarjeta de crédito.",
            "2. Reportar una transacción no reconocida en el estado de cuenta.",
            "3. Solicitar información sobre las tasas de interés y cargos asociados.",
            "4. Actualizar la información personal vinculada a la tarjeta (dirección, número de teléfono, etc.).",
            "5. Bloquear la tarjeta en caso de pérdida o robo.",
            "6. Obtener asistencia para realizar pagos o establecer un plan de pago.",
            "7. Consultar el estado de una solicitud de aumento de límite de crédito.",
            "8. Resolver problemas con la emisión o activación de una nueva tarjeta.",
            "9. Obtener información sobre los beneficios y recompensas asociados a la tarjeta.",
            "10. Obtener asesoramiento sobre el uso seguro de la tarjeta en línea o en el extranjero."
        ];
        //si ademas, el operador es una persona, seteamos el detalle de la accion requerida
        detalleAccionRequerida = acciones_soporte_tecnico[Math.floor(Math.random() * acciones_soporte_tecnico.length)];
        observacionAuditor = elegirParam(0.5);
        if (observacionAuditor === "Opcion 1") {
            //array de posibles observaciones del auditor
            const observaciones_auditor = [
                "1. La respuesta proporcionada por el operador fue clara y precisa, brindando al cliente la información necesaria de manera efectiva.",
                "2. Se observó una demora significativa en el tiempo de espera antes de que el cliente fuera atendido, lo que podría afectar la satisfacción del cliente.",
                "3. El operador demostró un excelente conocimiento de los procedimientos y políticas de la compañía al abordar la consulta del cliente.",
                "4. La interacción careció de empatía; el operador podría mejorar la conexión emocional con el cliente al mostrar más comprensión y empatía.",
                "5. Se identificó un malentendido en la resolución del problema del cliente; sería beneficioso revisar la capacitación del operador en este aspecto específico."
            ];
        observacionAuditor = observaciones_auditor[Math.floor(Math.random() * observaciones_auditor.length)];
        } else {
            observacionAuditor = null;
        }
    }
    //definimos la duracion de la llamada
    let duracion = Fecha.generarDuracion(5, 60);
    
    //definimos si la llamada tiene encuesta o no
    let encuestaEnviada = elegirParam(0.8);
    if (encuestaEnviada === "Opcion 1") {
        encuestaEnviada = true;
    } else {
        encuestaEnviada = false;
    }

    //aqui se llamaran a los demas objetos de la llamada
    let cambioEstado = crearEstadosLlamada(duracion, encuestaEnviada, descripcionOperador);
    
    //seteamos las respuestas del cliente -si la llamada tiene encuesta. Si no, la cargamos a null
    let respuestaCliente = null;
    if (encuestaEnviada) {
        respuestaCliente = responderEncuestas("2023-12-31 09:00:00", cambioEstado[cambioEstado.length - 1].getFechaHoraInicio()); 
    }

    //para finalizar, creamos el cliente de la llamada
    let cliente = crearCliente();

    //creamos la llamada
    const llamada = new Llamada(descripcionOperador, detalleAccionRequerida, duracion, encuestaEnviada, observacionAuditor, cliente, cambioEstado, respuestaCliente);
    //agregamos la llamada al array de llamadas
    array_llamadas.push(llamada);
}

for (let i = 0; i < 1; i++) {
    generarLlamada();
}

export default array_llamadas;