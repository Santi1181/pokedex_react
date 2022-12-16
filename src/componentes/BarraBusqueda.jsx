import React from "react";
const { useState } = React;

const BarraBusqueda = (props) => {
  const { onSearch } = props;
  const [busqueda, setBusqueda] = useState("");

  const onChange = (e) => {
    setBusqueda(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(busqueda);
  };

  return (
    <div className="barraBusqueda-contenedor">
      <div className="barraBusqueda">
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar Pokemon..."
          onChange={onChange}
        />
      </div>
      <div className="barraBusqueda-boton">
        <button onClick={onClick} className="btn btn-primary">
          Buscar
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default BarraBusqueda;
