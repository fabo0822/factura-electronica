import { dataTable, observeTableChanges, saveInvoice } from "../controllers/summaryController.js";

class SummaryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <section class="row mt-4">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Detalles de Factura</h3>
        </div>
     

          <div class="card-body">
            <table class="table table-bordered">
              <tfoot>
                <tr>
                  <th colspan="3" id="subDet">Subtotal</th>
                </tr>
                <tr>
                  <th colspan="3">IVA (19%)</th>
                </tr>
                <tr>
                  <th colspan="3">Total</th>
                </tr>
              </tfoot>
            </table>
            <div class="form-group col-md-12 contenedor-boton  m">
            <button class="btn btn-dark" style="width: 100%;" type="submit" id=payBtn><h5>Pagar</h5></button>
          </div>
        </div>
      </section>
            `;
  }

  connectedCallback() {
    // Asegúrate de que el componente de tabla esté referenciado correctamente
    const tableComponent = this.shadowRoot.querySelector("table");
    const payButton = this.shadowRoot.querySelector("#payBtn");

    observeTableChanges(tableComponent, () => {
      dataTable(tableComponent, this);  // Llamada a actualizar el resumen
      saveInvoice();  // Llamada a guardar la factura
    });

    // Escuchar evento custom desde userComponent
    const userComponent = document.querySelector("user-component");
    userComponent.addEventListener("userDataSubmitted", (event) => {
      const userData = event.detail;
      console.log("User Data Received: ", userData);
    });
  }
}

customElements.define("summary-component", SummaryComponent);

