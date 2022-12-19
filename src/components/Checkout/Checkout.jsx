import React from 'react'

const Checkout = () => {
  return (
    <div>
        <h2 class="titles">Tu carrito:</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody id="tablabody">

            </tbody>
        </table>
        <div class="total">
            <h4 id="total">Total a pagar $:</h4>
        </div>
        <div class="Pagabutton">
            <div id = "compraB" class="reset btn btn-primary" style={{ margin: "5px" }}>Finalizar Compra</div>
            <div id = "resetB" class="reset btn btn-primary" style={{ margin: "5px" }}>Borrar Carrito</div>
        </div>
    </div>
  )
}

export default Checkout