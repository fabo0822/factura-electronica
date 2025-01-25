import { loadProducts, loadCode } from "../controllers/prodController.js";
import { collectUserData } from "../controllers/userController.js";

class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <section class="row mt-4" >
      <div class="col">
        <div class="card">
      
      <div class="card-body">
        <form class="row">
          <div class="form-group col-md-2">
            <label for="nombre">cod producto</label>
            <input type="number" class="form-control" id="codeNumber" disabled aria-describedby="numberFact">
          </div>
        </form>
        <form class="row">
          <div class="form-group col-md-4">
            <label for="nombre">Nombre Producto</label>
          <select id="selectProd" class="form-select">
            <option value="0">Seleccione un Producto...</option>
            <option value="1">producto1</option>
            <option value="2">producto2</option>
            <option value="3">producto3</option>
            <option value="4">producto4</option>
            <option value="5">producto5</option>
          </select>
          </div>
        </form>
        <form class="row">
          <div class="form-group col-md-6">
            <label for="nombre">Valor Unitario</label>
            <input type="number" class="form-control"  disabled id="unitValue">
          </div>
          <div class="form-group col-md-6">
            <label for="nombre">Cantidad</label>
            <input type="number" class="form-control"  id="amountProd">
          </div>
        </form>
        <section class="row mt-4">
          <div class="col">
              <form class="row">
                <div class="form-group col-md-12 contenedor-boton ">
                  <button class="btn btn-primary" style="width: 100%;" type="submit"  id="submitBtn" >+</button>
              </form>

      </section>
    `;
  }

  connectedCallback() {
    loadProducts(this);

    this.shadowRoot
      .querySelector("#submitBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        collectUserData(this);
      });

    this.shadowRoot
      .getElementById("selectProd")
      .addEventListener("change", () => {
        loadCode(this);
      });
  }
}

customElements.define("product-component", ProductComponent);

