import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estudiante = ({nombre, edad, genero, id}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {nombre}
            </h5>
            <p className="card-text">Edad: {edad}.</p>
            <p className="card-text">Genero: {genero}.</p>
            <p><Link to={`/estudiantes/${id}`}>Detalle</Link></p>
        </div>
    </div>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "no tiene nombre"
}

export default Estudiante;