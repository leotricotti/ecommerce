import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/">E-Store</Link>
        <div
          class="collapse navbar-collapse d-flex align-items-center mb-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu d-flex align-items-center">
            <div class="d-flex justify-content-center position-relative admin-panel">
              <button
                class="btn btn-link text-decoration-none admin-btn"
                type="button"
                onclick="goToAdminPanel()"
              >
                Admin Panel
              </button>
            </div>
            <p class="text-white-50">Bienvenido</p>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="text-light me-3" id="'user-name"></span>
                <i class="fas fa-user"></i>
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="#">
                    <i class="fas fa-sliders-h fa-fw"></i>
                    Cuenta
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    <i class="fas fa-cog fa-fw"></i>
                    Configuración
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="btn dropdown-item" onclick="logout()">
                    <i class="fas fa-sign-out-alt fa-fw"></i>
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
            <button class="btn position-relative" onclick="setCartRoute()">
              <Link to="" id="cart-route">
                <i class="fa-solid fa-cart-shopping"></i>
                <span
                  id="cart-badge"
                  class="cart-basket d-flex align-items-center justify-content-center"
                ></span>
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
