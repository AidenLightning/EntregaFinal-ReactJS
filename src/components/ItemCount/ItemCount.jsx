import React from 'react'
import { useState } from 'react';

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

    <div className="row border mx-0">
      {verificaSiExisteEnCarrito(carrito, itemSelected) ? (
        <>
          <div>
            <h1>Hayta</h1>
          </div>
        </>
      ) : (
        <div>
            <button onClick={sumar} className="btn btn-primary">Sumar</button>
            <button onClick={restar} className="btn btn-primary">Restar</button>
            <h1>{count}</h1>
            <button onClick={() => addCarrito(producto)} className="btn btn-primary">Agregar a Carrito</button>
        </div>
      )}

        <div>
            <h1>Returno Button</h1>
        </div>
    </div>



  )
}

export default ItemCount