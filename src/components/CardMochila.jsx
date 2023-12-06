import React from "react";

const CardMochila = ({ imagenM }) => {
    return (
        <div className="card  col-3 m-3" /*style="width: 18rem;"*/ >
            <img src={imagenM} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Mochilas</p>
            </div>
        </div>
    )
}
export default CardMochila