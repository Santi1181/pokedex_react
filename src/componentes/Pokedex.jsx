import React from "react";
import Paginacion from "./Paginacion";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, pagina, setPagina, total } = props;

  const ultimaPagina = () => {
    const proximaPagina = Math.max(pagina - 1, 0);
    setPagina(proximaPagina);
  };

  const proximaPagina = () => {
    const proximaPagina = Math.min(pagina + 1, total);
    setPagina(proximaPagina);
  };

  return (
    <div>
      <div className="cabecera">
        <h1>Pokedex</h1>
        <Paginacion
          pagina={pagina + 1}
          totalPaginas={total}
          clickIzquierdo={ultimaPagina}
          clickDerecho={proximaPagina}
        />
      </div>
      <div className="pokedex-grid">
        {pokemons.map((pokemon, indice) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
