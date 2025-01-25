import { setTable } from "../controllers/tableController.js";

class TableComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html */ `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <section class="row mt-4">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Resumen Producto</h3>
            </div>
            <table class="table text-center">
            <thead>
            <tr>
              <th scope="col "id = "codTable">#</th>
              <th scope="col "id = "nameTable">Nombre</th>
              <th scope="col" Id = "valueTable">valor unitario</th>
              <th scope="col" Id = "amountTable">Cantidad</th>
              <th scope="col" Id = "subTable">Subtotal</th>
            </tr>
            </thead>
            </table>
              </form>


            </section>
        `;
  }
  prepareTableData(userData) {
    const tableData = [];
    for (const item of userData.items) {
      tableData.push({
        code: item.code,
        name: item.name,
        value: item.value,
        amount: item.amount,
        subTotal: item.value * item.amount,
      });
      return tableData;
    }
  }

  connectedCallback() {
    const userComponent = document.querySelector("user-component");

    userComponent.addEventListener("userDataSubmitted", (event) => {
      console.log("Evento recibido:", event.detail);
      const userData = event.detail;
      alert(JSON.stringify(userData));
      setTable(this, userData);
    });
  }
}

customElements.define("table-component", TableComponent);

