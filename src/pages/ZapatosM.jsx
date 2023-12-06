import React from "react";
import CardZapatos from "../components/CardZapatos";
import blanco from "../imagenes/zapatos/zapatosb.avif"
import morado from "../imagenes/zapatos/mbt.webp"
import rosa from "../imagenes/zapatos/mN.jpg"
import negro from "../imagenes/zapatos/mUL.webp"
import ultra from "../imagenes/zapatos/Zm.jpg"


const ZapatosM = () => {
    return (
        <div className="col-12  ">
            <h1> zapatos</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardZapatos imagenZ={blanco} />
                <CardZapatos imagenZ={morado} />
                <CardZapatos imagenZ={rosa} />
                <CardZapatos imagenZ={negro} />
                <CardZapatos imagenZ={ultra} />
                <CardZapatos imagenZ={blanco} />
            </div>
        </div>

    )
}

export default ZapatosM