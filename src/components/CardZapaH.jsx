import React from "react"

const CardZapaH = ({imagenZH,precioZH, nombreZH}) =>{
    return(
        <div class="card  col-3 m-3 " /*style="width: 18rem;"*/ >
        <img src={imagenZH} class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text">{nombreZH}</p>
            <p>{precioZH}</p>
        </div>
    </div>   
    )
}
export default CardZapaH