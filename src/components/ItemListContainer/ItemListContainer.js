import React from 'react'
import "./itemListContainer.css";

const ItemListContainer = (props) => {
    const {greeting} = props
  return (
    <div className='greeting'>
        <h1>🎉{greeting}🎉</h1>
        <div className='imgWelcome'></div>
    </div>
  )
}

export default ItemListContainer