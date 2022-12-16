import React from "react";

const Navbar = () => {
  let urlImagen =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <img src={urlImagen} alt="logoPokeApi" className="navBar-imagen" />
    </nav>
  );
};

export default Navbar;
