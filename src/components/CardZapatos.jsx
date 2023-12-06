import React from "react";


const CardZapatos = ({imagenZ}) => {
    return (
        
        <div className="card  col-3 m-3" /*style="width: 18rem;"*/ >
            <img src={imagenZ} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">zapaticosss</p>
            </div>
        </div>
    )
}

export default CardZapatos