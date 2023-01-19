import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import {NavLink} from 'react-router-dom'

const CartWidget = () => {
  const {carrito} = useContext(CarritoContext);

  return (
    <NavLink className={'nav-link'} to='/checkout'>🛒 {carrito.length}</NavLink>
  )
}

export default CartWidget