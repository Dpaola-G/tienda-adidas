import React from "react"
import CardSacoH from "../components/CardSacoH"
import gris from "../imagenes/buzo/hgris.jpg"
import grisSolo from "../imagenes/buzo/hgs.jpg"
import rojo from "../imagenes/buzo/hrojo.jpg"
import negro from "../imagenes/buzo/negro.jpg"


const SacoH = () => {
    return (
        <div className="col-12  ">
            <h1> Sacos</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardSacoH imagenS={gris} />
                <CardSacoH imagenS={grisSolo} />
                <CardSacoH imagenS={rojo} />
                <CardSacoH imagenS={negro} />
                <CardSacoH imagenS={grisSolo} />
                <CardSacoH imagenS={gris} />
            </div>
        </div>
    )
}
export default SacoH