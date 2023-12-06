import React from "react";
import CardMochilaH from "../components/CardMochilaH";
import negro from "../imagenes/hombre/Mn.jpg"
import negro2 from "../imagenes/hombre/MN2.jpg"
import gris from "../imagenes/hombre/Mg.jpg"
import blanco from "../imagenes/hombre/Mb.jpg"

const MochilaH = () => {
    return (

        <div className="col-12">
            <h1>mochilas hombre</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardMochilaH imagenMH={negro} />
                <CardMochilaH imagenMH={negro2} />
                <CardMochilaH imagenMH={gris} />
                <CardMochilaH imagenMH={negro2} />
                <CardMochilaH imagenMH={gris} />
                <CardMochilaH imagenMH={blanco} />
            </div>
        </div>

    )
}
export default MochilaH