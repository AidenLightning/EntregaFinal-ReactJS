import React from 'react'
import {NavLink} from 'react-router-dom'

const CartWidget = (props) => {
  const {numItems} = props
  return (
    <NavLink className={'nav-link'} to='/checkout'>🛒 {numItems}</NavLink>
  )
}

export default CartWidget