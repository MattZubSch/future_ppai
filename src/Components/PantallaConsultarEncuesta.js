import React, {useEffect, useState} from "react";
import gestor from "../models/GestorConsultarEncuesta.js";
import "./PantallaConsultarEncuesta.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function PantallaConsultarEncuesta() {
    const [ventana, setVentana] = useState(false)
    const [periodo, setPeriodo] = useState(false)

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDateOk, setStartDateOk] = useState(false);
    const [llamadaSeleccionada, setLlamadaSeleccionada] = useState(false)
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        opcionConsultarEncuesta()
    }, [])
   
    function habilitarVentana() {
        return setVentana(true)
    }

    function pedirPeriodoFecha(){
        setPeriodo(true)
    }

    function opcionConsultarEncuesta(){
        if (ventana === false) {
            habilitarVentana()
        }
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
            setVentana(false)
        }
    };

    function guardarLlamadas(){
        gestor.tomarPeriodoFecha(startDate, endDate)
        gestor.buscarLlamadasConEncuestas();
        // console.log(gestor.llamadasEncuesta)
        return true
    }

    function tomarSeleccionLlamada(llamada){
        gestor.tomarSeleccionLlamada(llamada)
        setLlamadaSeleccionada(true)
    }

    function mostrarLlamadasConEncuesta(){
        if (gestor.llamadasEncuesta.length === 0){
            return (
                <div>
                    <h3>No hay llamadas con encuestas en el periodo seleccionado</h3>
                </div>
            )
        }
        
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <td><strong>Nombre del Cliente</strong></td>
                    <td><strong>Estado Actual</strong></td>
                </thead>
                <tbody>
                    {gestor.llamadasEncuesta.map((llamada, index) => (
                        <tr key={index} onClick={() => tomarSeleccionLlamada(llamada)}>
                            <td>{llamada.cliente.getNombre()}</td>
                            <td>{llamada.encuestaEnviada.getDescripcionEncuesta()}</td>
                        </tr>))}
                </tbody>
            </table>       
        
        )
    }

    function mostrarDatosLlamadaSeleccionada(){
        let datos = gestor.obtenerDatosLlamadaSeleccionada()
        // console.log("Datos: " + datos.preguntas)
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <td><strong>Cliente</strong></td>
                            <td><strong>Estado Actual</strong></td>
                            <td><strong>Duracion</strong></td>
                        </tr>
                        {/* <td><strong>Respuestas Seleccionadas</strong></td>
                        <td><strong>Descripcion</strong></td>
                        <td><strong>Pregunta</strong></td> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.datosLlamada[0]}</td>
                            <td>{datos.datosLlamada[1]}</td>
                            <td>{datos.datosLlamada[2]}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>{datos.encuesta}</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <td>Pregunta 1</td>
                        <td>Pregunta 2</td>
                        <td>Pregunta 3</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.preguntas[0]}</td>
                            <td>{datos.preguntas[1]}</td>
                            <td>{datos.preguntas[2]}</td>
                        </tr>
                        <tr>
                            <td>{datos.respuestaCliente[0]}</td>
                            <td>{datos.respuestaCliente[1]}</td>
                            <td>{datos.respuestaCliente[2]}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }

    function confirmCancelar() {
        setVentana(false)
        setPeriodo(false)
        setStartDateOk(false)
        setLlamadaSeleccionada(false)
        setCancel(false)
        setStartDate("")
        setEndDate("")
        opcionConsultarEncuesta()
    }

    function cancelar(){
        setCancel(true)
    }
    
    return (
        <div>
            <header className="p-5">
                <h1>Consultar Llamadas</h1>
            </header>
            {ventana && <div className="container">
            {!periodo && <div className="buttonContainer">
                <button onClick={pedirPeriodoFecha} className="btn btn-primary p-2 m-5">Nueva Consulta</button>
            </div>}
            {periodo && <div>
                {!startDateOk && 
                    <form onSubmit={tomarFechaInicio}>
                        <div className="fecha">
                            <label for="start-date">Fecha de inicio:</label>
                            <input type="date" id="start-date" name="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} 
                            />
                        </div>
                        <input type="submit" value="Consultar" />
                    </form>
                }
                {startDateOk &&
                <form onSubmit={tomarFechaFin}>
                    <div className="fecha">
                        <label for="end-date">Fecha fin:</label>
                        <input type="date" id="end-date" name="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <input type="submit" value="Consultar" />
                </form>
                }
            </div>        
            }
        </div>
            }
            {!ventana && setStartDateOk && guardarLlamadas() && <div>
                {!llamadaSeleccionada && mostrarLlamadasConEncuesta()}
                {llamadaSeleccionada && mostrarDatosLlamadaSeleccionada()}
                </div>}
            <footer>
                <div className="Btn-container">
                    <button onClick={() => {cancelar()}} className="btn btn-primary p-2 m-5">Cancelar</button>
                    {cancel && 
                    <button onClick={() => {confirmCancelar()}} className="btn btn-primary p-2 m-5">Confirmar Cancelacion</button>}
                </div>
            </footer>
        </div>
    );
}


export default PantallaConsultarEncuesta;

