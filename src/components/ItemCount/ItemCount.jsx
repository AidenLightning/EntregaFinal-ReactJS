import React from 'react'
import { useState } from 'react';

const ItemCount = (props) => {

const {itemSelect,initialValue, addCarrito} = props;

const[count, setCount] = useState(initialValue);
const{stock} = itemSelect;

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
    ...itemSelect,
    cantidad: count
}

  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <h1>{count}</h1>
        <button onClick={() => addCarrito(producto)}>Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount