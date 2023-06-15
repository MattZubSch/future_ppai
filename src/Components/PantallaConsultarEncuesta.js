import React, {useEffect, useState} from "react";
import array_llamadas from "../models/Llamada.js";
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

    useEffect(() => {
        opcionConsultarEncuesta()
    }, [])
   
    function habilitarVentana() {
        return setVentana(!ventana)
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
        let datosLlamada = gestor.obtenerDatosLlamadaSeleccionada()
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <td><strong>Cliente</strong></td>
                    <td><strong>Estado Actual</strong></td>
                    <td><strong>Duracion</strong></td>
                    {/* <td><strong>Respuestas Seleccionadas</strong></td>
                    <td><strong>Descripcion</strong></td>
                    <td><strong>Pregunta</strong></td> */}
                </thead>
                <tbody>
                    <tr>
                        <td>{datosLlamada[0]}</td>
                        <td>{datosLlamada[1]}</td>
                        <td>{datosLlamada[2]}</td>
                    </tr>
                </tbody>
            </table>
        )
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



            {/* {listaLlamadas && <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre Cliente</th>
                            <th>Duración</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {llamadas.map((llamada, index) => (
                            <tr key={index}>
                                <td>{llamada.mostrarDatos()[0]}</td>
                                <td>{llamada.mostrarDatos()[1]}</td>
                                <td>{llamada.mostrarDatos()[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>} */}
        </div>
    );
}


export default PantallaConsultarEncuesta;

