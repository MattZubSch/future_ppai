import React, {useState} from "react";
import { Llamada, llamadas} from "../models/Llamada.js";

function PantallaConsultarEncuesta() {
    

    function getLlamadas(){
        return llamadas.map((llamada) => {
            return <li>{llamada.nomCliente}</li>
        });
    }
    
    return (
        <div>
        <button onClick={getLlamadas}>Mostrar Llamadas</button>
        </div>
    );
}

export default PantallaConsultarEncuesta;