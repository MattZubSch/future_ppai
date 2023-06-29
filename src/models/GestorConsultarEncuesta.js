import array_llamadas from "./Llamada.js";
import array_encuestas from "./Encuesta.js";

class GestorConsultarEncuesta{
    constructor(fecha, fechaInicio, fechaFin, csv, llamadasEncuesta, llamadaSeleccionada){
        this.fecha = fecha;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.csv = csv;
        this.llamadasEncuesta = [];
        this.llamadaSeleccionada = llamadaSeleccionada;
    }
    nuevaConsultaEncuesta(){
        return true
    }
    tomarPeriodoFecha(fechaInicio, fechaFin){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    buscarLlamadasConEncuestas(){
        this.llamadasEncuesta = [];
        array_llamadas.forEach(llamada => {
            if (llamada.esDePeriodo(this.fechaInicio, this.fechaFin)){
                if (llamada.esFinalizada()) {
                    if (llamada.esEncuestaRespondida()){
                    this.llamadasEncuesta.push(llamada);
                }
                }
            }
        })
        return this.llamadasEncuesta;
    }
    getFechaActual(){
        let fechaActual = new Date();
        let dia = fechaActual.getDate();
        if (dia < 10){
            dia = "0" + dia;
        }
        let mes = fechaActual.getMonth() + 1;
        if (mes < 10){
            mes = "0" + mes;
        }
        let año = fechaActual.getFullYear();
        return this.fecha = año + '-' + mes + '-' + dia; 
    }
    tomarSeleccionLlamada(llamadaSeleccionada){
        this.llamadaSeleccionada = llamadaSeleccionada;
    }
    obtenerDatosLlamadaSeleccionada(){
        //buscar array con respuestas de cliente
        let respuestasCliente = this.llamadaSeleccionada.mostrarRespuestasCliente();
        //defino el objeto que devolvera toda la informacion de la llamada seleccionada
        let datosLlamadaSelec = this.buscarEncuesta(respuestasCliente)
        console.log(datosLlamadaSelec)
        if (datosLlamadaSelec !== false){
            let llamada = this.llamadaSeleccionada.mostrarDatos();
            datosLlamadaSelec = { ...datosLlamadaSelec, datosLlamada: llamada}
        }

    return datosLlamadaSelec
    }
    buscarEncuesta(arrayRtas){
        //defino array que guarde las preguntas filtradas
        let retorno = false;
        let preguntas = [];
        //busco por cada encuesta sus preguntas asociadas
        //aqui inicio el segundo loop
        array_encuestas.forEach(encuesta => {
            for (let i = 0; i < arrayRtas.length; i++) {
                let rtaCliente = encuesta.esRespuestaPosible(arrayRtas[i])
                if (rtaCliente !== false){
                    preguntas.push(rtaCliente.pregunta)
                } else {
                    preguntas = [];
                    break;
                }
            }
            if (preguntas.length === arrayRtas.length){
                //si se encontro la encuesta, guardarla en una variable
                let descEncuesta = encuesta.getDescripcionEncuesta();
                let descPreguntas = preguntas.map(pregunta => pregunta.getDescripcion())
                //defino el objeto que contendra los datos de la llamada, la encuesta, las preguntas y las respuestas
                retorno = {encuesta: descEncuesta, preguntas: descPreguntas, respuestaCliente: arrayRtas, datosLlamada: null}
            }
        })
        return retorno
    }
    tomarFormaVisualizacion(){
        const table = document.createElement('table');
        let datos = this.obtenerDatosLlamadaSeleccionada()
        table.innerHTML = `
            <tr>
              <td>Cliente</td>
              <td>Estado Actual</td>
              <td>Duracion</td>
            </tr>
            <tr>
              <td>${datos.datosLlamada.cliente}</td>
              <td>${datos.datosLlamada.estado}</td>
              <td>${datos.datosLlamada.duracion}</td>
            </tr>
            <tr></tr>
            <tr>
                <td>Descripcion Encuesta</td>
            </tr>
            <tr>
                <td>${datos.encuesta}</td>
            </tr>
            <tr></tr>
            <tr>
                <td>Pregunta 1</td>
                <td>Pregunta 2</td>
                <td>Pregunta 3</td>
            </tr>
            <tr>
                <td>${datos.preguntas[0]}</td>
                <td>${datos.preguntas[1]}</td>
                <td>${datos.preguntas[2]}</td>
            </tr>
            <tr>
                <td>${datos.respuestaCliente[0]}</td>
                <td>${datos.respuestaCliente[1]}</td>
                <td>${datos.respuestaCliente[2]}</td>
            </tr>
  
                      
        `;
        
        const csvData = this.crearCSV(table);
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'table.csv');
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    crearCSV(table) {
        let csv = '\uFEFF';
        const rows = table.getElementsByTagName('tr');
      
        for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].getElementsByTagName('td');
          const row = [];
      
          for (let j = 0; j < cells.length; j++) {
            const cellData = cells[j].innerText.replace(/"/g, '""'); // Reemplaza las comillas dobles por comillas dobles dobles
            row.push('"' + cellData + '"');
          }
      
          csv += row.join(';') + '\n';
        }
      
        return csv;
    }
}

const gestor = new GestorConsultarEncuesta(null, null, null, null, null, null);

export default gestor;


