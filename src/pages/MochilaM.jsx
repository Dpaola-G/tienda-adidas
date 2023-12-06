import React from "react";
import CardMochila from "../components/CardMochila";
import grisrosa from "../imagenes/mochila/Bmio.webp"
import morado from "../imagenes/mochila/mAZ.avif"
import moradoclaro from "../imagenes/mochila/mcla.jpg"
import rosMetalico from "../imagenes/mochila/mr.avif"

const MochilaM = () => {
    return (
        <div className="col-12  ">
            <h1> mochila</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardMochila imagenM={rosMetalico} />
                <CardMochila imagenM={morado} />
                <CardMochila imagenM={moradoclaro} />
                <CardMochila imagenM={grisrosa} />
                <CardMochila imagenM={rosMetalico} />
                <CardMochila imagenM={morado} />


            </div>
        </div>
    )
}

export default MochilaM;