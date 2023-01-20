import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const ItemCount = (props) => {

const {itemSelected,initialValue,addCarrito,carrito} = props;

const[count, setCount] = useState(initialValue);
const{stock} = itemSelected;

const sumar = () => {
if (count < stock) {
    setCount(count +1);
    }
}


const restar = () => {
if (count > 1 ) {
    setCount(count -1)
    }
}

const producto = {
    ...itemSelected,
    cantidad: count
}

const verificaSiExisteEnCarrito = (carrito, itemSelected) => {
     return carrito.some((a) => a.id === itemSelected.id)
  };

  return (

    <div className="itcount row border mx-0">
      {verificaSiExisteEnCarrito(carrito, itemSelected) ? (
        <>
          <div>
            <br/>
            <h4>🛒 El articulo ya esta en tu carrito 🛒</h4>
            <br/>
            <Link to={`/checkout`}>
            <button className="carritob btn btn-success btn-lg btn-block">Ir al Carrito</button>
            </Link>
          </div>
        </>
      ) : (
        <div>
            <br/>
            <div className='d-flex justify-content-between'>
            <button onClick={sumar} className="sumarb btn btn-primary">+</button>
            <h1 className='counter'>{count}</h1>
            <button onClick={restar} className="restarb btn btn-primary">-</button>
            </div>
            <br/>
            <button onClick={() => addCarrito(producto)} className="btn btn-success btn-lg btn-block">Agregar a Carrito</button>
        </div>
      )}
        <div>
            <br/>
            <Link to={`/`}>
            <button className="regresarb btn btn-danger btn-lg btn-block">Regresar</button>
            </Link>
        </div>
    </div>



  )
}

export default ItemCount