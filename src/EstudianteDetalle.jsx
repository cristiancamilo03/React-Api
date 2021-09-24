import React from "react";

const estudiantes = [
    {
        "id" : 1,
        "edad" : 23,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 2,
        "nombre": "maria diaz",
        "edad" : 32,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 3,
        "nombre": "pedro rey",
        "edad" : 12,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 4,
        "nombre": "joe rodriguez",
        "edad" : 58,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 5,
        "nombre": "carol roa",
        "edad" : 59,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 6,
        "nombre": "luis torres",
        "edad" : 14,
        "genero": "M",
        "grado": "10"
    }
]

const EstudianteDetalle = ({match}) => {
    const estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                estudiante ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {estudiante.nombre}
                            </h5>
                            <p className="card-text">Edad: {estudiante.edad}.</p>
                            <p className="card-text">Genero: {estudiante.genero}.</p>
                            <p className="card-text">Grado: {estudiante.grado}.</p>
                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/estudiantes`}>Ver todos</a>
        </>
    );
};

export default EstudianteDetalle;