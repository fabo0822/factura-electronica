// import { createNumberFact } from "../controllers/userController.js"; // Assuming this import is in your actual code

class UserComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let id = Date.now().toString(15); // Generate a temporary invoice number

    this.shadowRoot.innerHTML = /*html */ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <form id="user-form">
        <div class= "d-flex justify-content-center">

        </div>
        <section class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Factura No.</h3>
              <div class="form-group col-md-2">
              
              <input type="text" class="form-control" id="invNumber" value= "${id}" disabled aria-describedby="numberFact"> 
              </div>
          </div>
        <div class="card-body">
        <form class="row">
          <div class="form-group col-md-2">
            <label for="nombre">No Id</label>
            <input type="text" class="form-control" id="inputId" >
          </div>
          </form>

          <form class="row">
          <div class="form-group col-md-6">
            <label for="nombre">Nombres</label>
            <input type="text" class="form-control" id="nameClient">
          </div>
          <div class="form-group col-md-6">
            <label for="nombre">apellidos</label>
            <input type="text" class="form-control" id="lastClient">
          </div>
        </form>
      
        <form class="row">
        <div class="form-group col-md-12">
          <label for="nombre">Direccion</label>
          <input type="text" class="form-control" id="address" aria-describedby="addressHelp" >
        </div>
      </form>

      <form class="row">
      <div class="form-group col-md-12">
        <label for="nombre">Email</label>
        <input type="text" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
    </form>
     

       
      </form>`;
  }

  connectedCallback() {
    // createNumberFact(this); // Uncomment this line to generate the invoice number on component connection
  }
}

customElements.define("user-component", UserComponent);



