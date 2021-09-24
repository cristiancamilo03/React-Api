import React  from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "edad" : 23,
        "genero": "M"
    },
    {
        "nombre": "maria diaz",
        "edad" : 32,
        "genero": "F"
    },
    {
        "nombre": "pedro rey",
        "edad" : 12,
        "genero": "M"
    },
    {
        "nombre": "joe rodriguez",
        "edad" : 58,
        "genero": "M"
    },
    {
        "nombre": "carol roa",
        "edad" : 59,
        "genero": "F"
    },
    {
        "nombre": "luis torres",
        "edad" : 14,
        "genero": "M"
    }
]

const Contenedor = () => (
    <>
         {
             estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero }/>)
         }
    </>
);

export default Contenedor;