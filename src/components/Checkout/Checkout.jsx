import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./checkout.css";
import { Link } from "react-router-dom";
import Formulario from "../Formulario/Formulario";
import Swal from "sweetalert2";

const Checkout = () => {

  const { carrito, limpiarCarrito } = useContext(CarritoContext);

  let totalCarrito = carrito.reduce(
    (acumulador, carrito) => acumulador + carrito.precio*carrito.cantidad,0);

  return (
    <div>
      <div className="container-fluid">
        {carrito.length > 0 && (
          <div>
            <br/>
            <h2 className="titles">Tu carrito:</h2>
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map(({ nombre, cantidad, foto, precio }, index) => (
                    <tr key={index}>
                      <th scope="row">{cantidad}</th>
                      <td className="w-25">
                        <img
                          src={foto}
                          className="img-fluid img-thumbnail tableimg"
                          alt="Product"
                        />
                      </td>
                      <td>{nombre}</td>
                      <td>$ {precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="total">
              <h4 id="total">Total a pagar $: {totalCarrito} USD</h4>
            </div>

            <div className="formulario container border">
            <Formulario/>
            <button onClick={() => {
                Swal.fire({
                    title: 'Estas Seguro ?',
                    text: "No podras revertir esto !",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, borralo !',
                    cancelButtonText: 'Cancelar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Borrado!',
                        'Tu Carrito se ha borrado !',
                        'success'
                      );limpiarCarrito();
                    }
                  })
            }} className="resetb btn btn-lg btn-danger ">Borrar Carrito</button>
            </div>
          </div>
        )}

        {carrito.length < 1 && (
            <div>
                <br/>
                <h3 className="text-center text-uppercase"> 😔 El carrito esta vacio 😔</h3>
                <br/>
                <img className="img-fluid"
                src="https://media.sweetwater.com/api/i/f-webp__ha-9ced74217ac8a73c__hmac-0476eb5d2ab94209b4b48c78cc2c64555b5fdf9f/cart/case.png.auto.webp">
                </img>
                <div style={{margin: "50px"}}>
                <Link to={`/`}>
                    <button className="regresarb btn btn-danger btn-lg btn-block">Regresar</button>
                </Link>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
