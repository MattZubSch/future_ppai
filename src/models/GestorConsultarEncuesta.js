import array_llamadas from "./Llamada.js";

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
        console.log(this.llamadaSeleccionada)
    }
    //logica para llegar a la respuesta prosible: 
    //en un loop de respuestas, ir desde la llamada hasta las respuetsas del cliente, y mientras haya respuestas, obtener a la respuesta posible. Guardarlas en un array
    //luego, hacer otro loop de preguntas, que vaya desde el gestor hacia encuestas, y por cada pregunta, comparar con el array de respuestas posibles, y si coinciden, guardarlas en un array.
    //es necesario que se modifiquen las respuestas posibles, para que todas las preguntas sean diferentes entre si, y no haya coincidencias. Ademas, borrar de la llamada el atributo de encuestaAsociada, y volverlo un booleano.
    obtenerDatosLlamadaSeleccionada(){
        let datosLlamada = this.llamadaSeleccionada.mostrarDatos()
        let respuestaCliente = this.llamadaSeleccionada.mostrarRespuestasCliente();
        let preguntas = this.llamadaSeleccionada.mostrarPreguntas();
        let encuesta = this.llamadaSeleccionada.mostrarEncuesta();
        return {datosLlamada, respuestaCliente, preguntas, encuesta};
    }
    tomarFormaVisualizacion(){
        const table = document.createElement('table');
        let datos = this.obtenerDatosLlamadaSeleccionada()
        table.innerHTML = `
          <thead>
            <tr>
              <td><strong>Cliente</strong></td>
              <td><strong>Estado Actual</strong></td>
              <td><strong>Duracion</strong></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${datos.datosLlamada[0]}</td>
              <td>${datos.datosLlamada[1]}</td>
              <td>${datos.datosLlamada[2]}</td>
            </tr>
          </tbody>
            <table>
                <thead>
                    <tr>
                        <td>${datos.encuesta}</td>
                    </tr>
                </thead>
            </table>
            <table className="table table-striped table-hover">
                <thead>
                    <td>Pregunta 1</td>
                    <td>Pregunta 2</td>
                    <td>Pregunta 3</td>
                </thead>
                    <tbody>
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
  
                      </tbody>
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
        let csv = '';
        const rows = table.getElementsByTagName('tr');
      
        for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].getElementsByTagName('td');
          const row = [];
      
          for (let j = 0; j < cells.length; j++) {
            const cellData = cells[j].innerText.replace(/"/g, '""'); // Reemplaza las comillas dobles por comillas dobles dobles
            row.push('"' + cellData + '"');
          }
      
          csv += row.join(',') + '\n';
        }
      
        return csv;
    }
    
}

const gestor = new GestorConsultarEncuesta(null, null, null, null, null, null);

export default gestor;


