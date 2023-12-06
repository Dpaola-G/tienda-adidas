import React from "react"
import CardZapaH from "../components/CardZapaH"
import abano from "../imagenes/zapatos/zapatoscf.jpg"
import negros from "../imagenes/zapatos/zapatosN.avif"
import rayas from "../imagenes/zapatos/zapatosd.webp"
import blanco from "../imagenes/zapatos/zapatosb.avif"

const ZapatosH = () =>{
    return(
        
        <div className="d-flex flex-wrap justify-content-center ">
        <CardZapaH imagenZH={blanco} precioZH="300000" nombreZH="blancos"/>
        <CardZapaH imagenZH={abano}/>
        <CardZapaH imagenZH={negros}/>
        <CardZapaH imagenZH={rayas}/>
        <CardZapaH imagenZH={blanco} precioZH="300000" nombreZH="blancos"/>
        <CardZapaH imagenZH={abano}/>
        
        </div>
    )
}
export default ZapatosH