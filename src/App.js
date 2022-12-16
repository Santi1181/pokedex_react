import React from "react";
import "./styles.css";
import Navbar from "./componentes/Navbar.jsx";
import BarraBusqueda from "./componentes/BarraBusqueda.jsx";
import Pokedex from "./componentes/Pokedex.jsx";
import { buscarPokemon, datosPokemon, obtenerPokemones } from "./api.js";
import PiePagina from "./componentes/PiePagina.jsx";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [total, setTotal] = useState(0);
  const [noEncontrado, setNoEncontrado] = useState(false);

  const Pokemones = async () => {
    try {
      const data = await obtenerPokemones(12, 12 * pagina);
      //setPokemons(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await datosPokemon(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setTotal(Math.ceil(data.count / 25));
      setNoEncontrado(false);
    } catch (error) {}
  };

  useEffect(() => {
    Pokemones();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return Pokemones();
    }
    setNoEncontrado(false);
    const resultado = await buscarPokemon(pokemon);
    if (!resultado) {
      return setNoEncontrado(true);
    } else {
      setPokemons([resultado]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="App">
        <BarraBusqueda onSearch={onSearch} />
        {noEncontrado ? (
          <div>
            No se encontro el Pokemon que estas buscando, intenta otra vez!!!!{" "}
          </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            pagina={pagina}
            setPagina={setPagina}
            total={total}
          />
        )}
        <PiePagina />
      </div>
    </div>
  );
}
