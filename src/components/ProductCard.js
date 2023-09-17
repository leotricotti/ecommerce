function ProductCard(products) {
  return (
    <div>
      <div className="container mt-5 mb-3">
        <h3 className="fw-normal mb-0 text-black mb-3 text-center text-decoration-underline">
          Listado de productos
        </h3>
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
        {/* <div className="row justify-content-center mb-3">
      {{#if products}}
        {{#each products}}
          <div className="col-md-12 col-xl-10 margin">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    {{#each thumbnail}}
                      <div
                        className="bg-image hover-zoom ripple rounded ripple-surface"
                      >
                        <img src={{img1}} className="w-100" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style="background-color: rgba(253, 253, 253, 0.15);"
                            ></div>
                          </div>
                        </a>
                      </div>
                    {{/each}}
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>
                      {{title}}
                    </h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>
                        310
                      </span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>
                        <b>
                          Categoria: {{category}}
                        </b>
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>
                        Llega el martes
                      </span>
                      <span className="text-primary">
                        •
                      </span>
                      <span>
                        Beneficio Tienda Puntos
                      </span>
                      <span className="text-primary">
                        •
                      </span>
                      <span>
                        Stock disponible
                        <br />
                      </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      {{description}}
                    </p>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">
                        ${{price}}
                      </h4>
                      <span className="text-danger">
                        <s>
                          {{price}}
                        </s>
                      </span>
                    </div>
                    <h6 className="text-success">
                      Envio gratis
                    </h6>
                    <div className="d-flex flex-column mt-4">
                      <button className="btn btn-primary btn-sm" type="button">
                        Detalles
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick="addProduct('{{this._id}}')"
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {{/each}}
      {{else}}
        <h1>
          {{message}}
        </h1>
        <h3>
          {{products}}
        </h3>
      {{/if}}
    </div> */}
      </div>
    </div>
  );
}

export default ProductCard;
