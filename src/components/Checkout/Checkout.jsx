import React from 'react'

const Checkout = () => {
  return (
    <div>
        <h2 className="titles">Tu carrito:</h2>
        <table className="table table-striped">
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
        <div className="total">
            <h4 id="total">Total a pagar $:</h4>
        </div>
        <div className="Pagabutton">
            <div id = "compraB" className="reset btn btn-primary" style={{ margin: "5px" }}>Finalizar Compra</div>
            <div id = "resetB" className="reset btn btn-primary" style={{ margin: "5px" }}>Borrar Carrito</div>
        </div>
    </div>
  )
}

export default Checkout