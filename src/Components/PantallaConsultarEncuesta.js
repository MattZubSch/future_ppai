import React, {useState} from "react";
import gestor from "../models/GestorConsultarEncuesta.js";
import "./PantallaConsultarEncuesta.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


function PantallaConsultarEncuesta() {
    const [ventana, setVentana] = useState(false)
    const [periodo, setPeriodo] = useState(false)
    const [encuestas, setEncuestas] = useState(false)

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDateOk, setStartDateOk] = useState(false);
    const [llamadaSeleccionada, setLlamadaSeleccionada] = useState(false)

    const [cancel, setCancel] = useState(false)

    function Inicio(){
        return (
            <button
            className="btn btn-primary p-2 m-5" 
            onClick={() => opcionConsultarEncuesta()}>
                Consultar Encuesta
            </button>
        )
    }
    
    function opcionConsultarEncuesta(){
        if (ventana === false) {
            habilitarVentana()
        }
    }

    function habilitarVentana() {
        return setVentana(true)
    }

    function NuevaConsulta(){
        return (
            <div className="buttonContainer">
                <button onClick={() => {
                        setPeriodo(gestor.nuevaConsultaEncuesta())
                    }} className="btn btn-primary p-2 m-5">Nueva Consulta</button>
            </div>
        )
    }

    function pedirPeriodoFecha(){
        return (
            <div className="d-flex flex-row m-1 justify-content-around">
                <div className="d-flex flex-column align-items-start">
                    <form onSubmit={tomarFechaInicio}>
                        <div className="fecha">
                            <label for="start-date">Fecha de inicio:</label>
                            <input type="date" id="start-date" name="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)
                            } 
                            />
                        </div>
                        <input type="submit" value="Cargar Inicio" 
                        className="btn btn-outline-success"/>
                    </form>
                    <h6 className="p-2">Fecha Inicio: {startDate}</h6>
                </div>
                {startDateOk &&
                <div className="d-flex flex-column align-items-end">
                    <form onSubmit={tomarFechaFin}>
                        <div className="fecha">
                            <label for="end-date">Fecha fin:</label>
                            <input type="date" id="end-date" name="end-date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        <input type="submit" value="Cargar Fin" 
                        className="btn btn-outline-success"/>
                    </form>
                    <h6 className="p-2">Fecha Fin: {endDate}</h6>
                </div>
                }
            </div>
        )
    }



    const tomarFechaInicio = (e) => {
        e.preventDefault();
        console.log(startDate) 
        setStartDateOk(true);
    };

    const tomarFechaFin = (e) => {
        e.preventDefault();

        // Verificar si la fecha de finalización es mayor a la fecha inicio
        if (endDate < startDate) {
            alert('La fecha de finalización no puede ser menor a la fecha de inicio');
            setEndDate("");
        } else {
            console.log(endDate)
            console.log('Formulario enviado');
            setEncuestas(true)
            setLlamadaSeleccionada(false)
            gestor.llamadaSeleccionada = null
        }
    };

    function guardarLlamadas(){
        gestor.tomarPeriodoFecha(startDate, endDate)
        gestor.buscarLlamadasConEncuestas();
        return true
    }

    function tomarSeleccionLlamada(llamada){
        gestor.tomarSeleccionLlamada(llamada)
        setLlamadaSeleccionada(true)
    }

    function BotonCancelar(){
        return (
            <footer className="footer p-2 py-4">
                <div className="Btn-container d-flex justify-content-end">
                    <button onClick={() => {cancelar()}} className="btn btn-primary p-3 m-5">Cancelar</button>
                    {cancel && window.confirm("¿Desea cancelar la consulta?")}
                </div>  
            </footer>
            )
    }

    function mostrarLlamadasConEncuesta(){
        if (gestor.llamadasEncuesta.length === 0){
            return (
                <div className="mx-auto">
                    <h3>No hay llamadas con encuestas en el periodo seleccionado</h3>
                </div>
            )
        }
        
        return (
            <table className="table table-striped table-hover mx-auto">
                <thead>
                    <td><strong>Nombre del Cliente</strong></td>
                    <td><strong>Estado Actual</strong></td>
                </thead>
                <tbody>
                    {gestor.llamadasEncuesta.map((llamada, index) => (
                        <tr key={index} onClick={() => tomarSeleccionLlamada(llamada)}>
                            <td>{llamada.cliente.getNombre()}</td>
                            <td>{llamada.getDuracion()}</td>
                        </tr>))}
                </tbody>
            </table>       
        
        )
    }

    function pedirSeleccionFormaVisualizacion(){
        return (
            <div className="Btn-container">
                <button onClick={() => {tomarSeleccionFormaVisualizacion()}} className="btn btn-primary p-2 m-5">Descargar CSV</button>
            </div>
        )
    }

    function mostrarDatosLlamadaSeleccionada(){
        let datos = gestor.obtenerDatosLlamadaSeleccionada()
        return (
            <div>
                <table className="table table-striped table-hover mx-auto">
                    <thead>
                        <tr>
                            <td><strong>Cliente</strong></td>
                            <td><strong>Estado Actual</strong></td>
                            <td><strong>Duracion</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.datosLlamada.cliente}</td>
                            <td>{datos.datosLlamada.estado}</td>
                            <td>{datos.datosLlamada.duracion}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-striped table-hover mx-auto">
                    <thead>
                        <tr>
                            <td><strong>Descripcion Encuesta</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.encuesta}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-striped table-hover mx-auto">
                    <thead>
                        <td><strong>Pregunta 1</strong></td>
                        <td><strong>Pregunta 2</strong></td>
                        {datos.preguntas[2] &&
                            <td><strong>Pregunta 3</strong></td>
                        }
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.preguntas[0]}</td>
                            <td>{datos.preguntas[1]}</td>
                            {datos.preguntas[2] &&
                            <td>{datos.preguntas[2]}</td>
                            }
                        </tr>
                        <tr>
                            <td>{datos.respuestaCliente[0]}</td>
                            <td>{datos.respuestaCliente[1]}</td>
                            {datos.respuestaCliente[2] &&
                            <td>{datos.respuestaCliente[2]}</td>
                            }
                        </tr>

                    </tbody>
                </table>
                {pedirSeleccionFormaVisualizacion()}
            </div>
        )
    }

    function tomarSeleccionFormaVisualizacion(){
        return gestor.tomarFormaVisualizacion()
    }

    function confirmCancelar() {
        setVentana(false)
        setPeriodo(false)
        setEncuestas(false)
        setStartDateOk(false)
        setLlamadaSeleccionada(false)
        setCancel(false)
        setStartDate("")
        setEndDate("")
        gestor.llamadaSeleccionada = null
    }

    function cancelar(){
        let opc = window.confirm("¿Desea cancelar la consulta?")
        if (opc === true){
            confirmCancelar()
        }
    }
    
    return (
        <div>
            <header className="p-5">
                <h1>Consultar Llamadas</h1>
            </header>
            {!ventana && Inicio()}
            
            {ventana && <div className="container p-2 py-4 mx-auto main-container">
            
                {!periodo && NuevaConsulta()}

                {periodo &&  <div>
                    {pedirPeriodoFecha()}

                    {encuestas && guardarLlamadas() && <div className="mx-auto">
                        {!llamadaSeleccionada && mostrarLlamadasConEncuesta()}
                        {llamadaSeleccionada && mostrarDatosLlamadaSeleccionada()}
                    </div>
                    }
                </div>
                    }
            </div>
            }
            {ventana && BotonCancelar()}
        </div>
    );
}


export default PantallaConsultarEncuesta;

