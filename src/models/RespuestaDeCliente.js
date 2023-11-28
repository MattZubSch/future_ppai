export class RespuestaDeCliente{
    constructor(id, fechaEncuesta, respuesta, idLlamada){
        this.id = id
        this.fechaEncuesta = fechaEncuesta;
        this.respuesta = respuesta;
        this.idLlamada = idLlamada
    }
    getRespuestaDeCliente(){
        return this.respuesta.getDescripcionRta();
    }
}