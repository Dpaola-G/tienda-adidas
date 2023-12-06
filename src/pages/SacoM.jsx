import React from "react";
import Card_Component from '../components/Card_Component'
import rosa from '../imagenes/buzorosa.webp'  // para importar las imagenes
import saco from '../imagenes/buzoAdidas.jpg'


const SacoM = () => {
    return (
        <div className="col-12  ">
            <h1>Esta es la página de perfil.</h1>
            <div className='m-4px d-flex flex-wrap justify-content-center'>
                <Card_Component imagen={rosa} />
                <Card_Component imagen={saco} />
                <Card_Component imagen={rosa} />
                <Card_Component imagen={saco} />
                <Card_Component imagen={rosa} />
                <Card_Component imagen={saco} />
  
            </div>
        </div>

    )
}

export default SacoM

