import React from "react";

export const ContenedorPokemons = ({ pokemons }) => {
    return (
        <>
            <div className="container d-flex flex-column align-items-center mt-5">
                <div className="card text-center shadow-lg p-4 mb-5 bg-light rounded">
                    <img
                        className="card-img-top w-50 mx-auto mb-3"
                        src={pokemons.image}
                        alt={pokemons.nombre}
                    />
                    <div className="card-body">
                        <h1 className="card-title mb-3">{pokemons.nombre}</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Poke Id:</strong> {pokemons.id}
                            </li>
                            <li className="list-group-item">
                                <strong>Altura:</strong> {pokemons.altura / 10} m
                            </li>
                            <li className="list-group-item">
                                <strong>Tipo:</strong> {pokemons.tipo}
                            </li>
                            <li className="list-group-item">
                                <strong>Peso:</strong> {pokemons.peso / 10} Kg
                            </li>
                            <li className="list-group-item">
                                <strong>Experiencia base:</strong> {pokemons.experiencia}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
