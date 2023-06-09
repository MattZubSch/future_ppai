import React, {useState} from "react";
import { llamadas} from "../models/Llamada.js";
import "./PantallaConsultarEncuesta.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function PantallaConsultarEncuesta() {
    const [listaLlamadas, setListaLlamadas] = useState(false); // [Llamada
   
    function cargarDatos(){
        return setListaLlamadas(!listaLlamadas)
    }
    
    return (
        <div>
            <header className="p-5">
                <h1>Consultar Llamadas</h1>
            </header>
            <div className="buttonContainer">
                <button onClick={cargarDatos} className="btn btn-primary p-2 m-5">Mostrar Llamadas</button>
            </div>
            {listaLlamadas && <table className="table table-striped table-hover">
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
                </table>}
        </div>
    );
}


export default PantallaConsultarEncuesta;

