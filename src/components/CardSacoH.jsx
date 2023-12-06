import React from "react";

const CardSacoH = ({imagenS}) => {
    return (
        <div class="card  col-3 m-3" /*style="width: 18rem;"*/ >
            <img src={imagenS} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Mochilas</p>
            </div>
        </div>
    )
}
export default CardSacoH