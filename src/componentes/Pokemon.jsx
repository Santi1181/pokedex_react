import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="tarjeta-pokemon">
      <div className="imagen-pokemon-contenedor">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="imagen-pokemon"
        />
      </div>
      <div className="cuerpo-pokemon">
        <div className="cabecera-pokemon">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div>
          <div className="pie-pokemon">
            {pokemon.types.map((type, indice) => {
              return (
                <div key={indice} className="pie-pokemon-texto">
                  {type.type.name}{" "}
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
