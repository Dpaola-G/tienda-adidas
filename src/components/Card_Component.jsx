
import React from 'react';



const Card_Component = ({imagen}) => {
    return (
        
        <div class="card  m-3 col-3" /*style="width: 18rem;"*/ >
            <img src={imagen} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Card_Component
