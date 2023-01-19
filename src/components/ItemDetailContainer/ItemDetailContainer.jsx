import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {productos,addCarrito,carrito} = useContext(CarritoContext);

  const {id} = useParams()

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {productos[id].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={productos[id].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{productos[id].nombre}</h4>
        <p className="card-text">{productos[id].descripcion}</p>
        <h5 className="card-text">$ {productos[id].precio} USD</h5>
        <h5 className="card-title">Existencia: {productos[id].stock}</h5>
        <ItemCount
          initialValue={1}
          addCarrito={addCarrito}
          itemSelected={productos[id]}
          carrito={carrito}
        />
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer