import React from "react";

function Title({ title }) {
  return (
    <h3 className="fw-normal mb-0 text-black mb-3 text-center text-decoration-underline">
      {title}
    </h3>
  );
}

function ProctsNav() {
  return (
    <div className="container mt-5 mb-3">
      <Title title="Listado de productos" />
      <nav className="d-flex justify-content-end mb-1 nav-products">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle mb-2 me-3"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtrar
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                // onClick="filterProductsByCategory ('Audio')"
              >
                Audio
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                // onClick="filterProductsByCategory ('Hogar')"
              >
                Hogar
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                // onClick="filterProductsByCategory ('Electronics')"
              >
                Electronics
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle mb-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                // onClick="sortProductsByPrice (1)"
              >
                Menor a mayor
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                // onClick="sortProductsByPrice (-1)"
              >
                Mayor a menor
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ProctsNav;
