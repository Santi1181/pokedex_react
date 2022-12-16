import React from "react";

const Paginacion = (props) => {
  const { clickIzquierdo, clickDerecho, pagina, totalPaginas } = props;

  return (
    <div className="paginacion">
      <button onClick={clickIzquierdo}>
        <div>◀️ </div>
      </button>
      <div>
        {pagina} de {totalPaginas}
      </div>
      <button onClick={clickDerecho}>
        <div>▶️ </div>
      </button>
    </div>
  );
};

export default Paginacion;
