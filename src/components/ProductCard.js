function ProductCard(products) {
  console.log(products);
  return (
    <div>
      <div class="container mt-5 mb-3">
        <h3 class="fw-normal mb-0 text-black mb-3 text-center text-decoration-underline">
          Listado de productos
        </h3>
        <nav class="d-flex justify-content-end mb-1 nav-products">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle mb-2 me-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtrar
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  class="dropdown-item"
                  onclick="filterProductsByCategory ('Audio')"
                >
                  Audio
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onclick="filterProductsByCategory ('Hogar')"
                >
                  Hogar
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onclick="filterProductsByCategory ('Electronics')"
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle mb-2"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button class="dropdown-item" onclick="sortProductsByPrice (1)">
                  Menor a mayor
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onclick="sortProductsByPrice (-1)"
                >
                  Mayor a menor
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div class="row justify-content-center mb-3">
      {{#if products}}
        {{#each products}}
          <div class="col-md-12 col-xl-10 margin">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    {{#each thumbnail}}
                      <div
                        class="bg-image hover-zoom ripple rounded ripple-surface"
                      >
                        <img src={{img1}} class="w-100" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style="background-color: rgba(253, 253, 253, 0.15);"
                            ></div>
                          </div>
                        </a>
                      </div>
                    {{/each}}
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>
                      {{title}}
                    </h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>
                        310
                      </span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>
                        <b>
                          Categoria: {{category}}
                        </b>
                      </span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>
                        Llega el martes
                      </span>
                      <span class="text-primary">
                        •
                      </span>
                      <span>
                        Beneficio Tienda Puntos
                      </span>
                      <span class="text-primary">
                        •
                      </span>
                      <span>
                        Stock disponible
                        <br />
                      </span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      {{description}}
                    </p>
                  </div>
                  <div
                    class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"
                  >
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">
                        ${{price}}
                      </h4>
                      <span class="text-danger">
                        <s>
                          {{price}}
                        </s>
                      </span>
                    </div>
                    <h6 class="text-success">
                      Envio gratis
                    </h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Detalles
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onclick="addProduct('{{this._id}}')"
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
