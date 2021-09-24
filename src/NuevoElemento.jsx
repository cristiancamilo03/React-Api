import React from 'react';

let estudiante = {
    nombre: "maria",
    edad: 23
};

var color = "azul";

const NuevoElemento = (props) => (
    <div className="contendeor">
        <h3>Estudiante</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { estudiante.edad } </p>
        <span>{ color }</span>
    </div>
)

export default NuevoElemento; 