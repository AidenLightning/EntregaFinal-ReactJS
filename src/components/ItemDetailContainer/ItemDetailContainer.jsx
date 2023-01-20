import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {

  const {productos,addCarrito,carrito} = useContext(CarritoContext);

  const {id} = useParams()

  const Prodfilter = id ? productos.filter ((item) => item.id === id) : productos

  return (
<div>

{Prodfilter.map(({ nombre, foto, precio, stock, descripcion}, index) => (
<div key={index}>
  <h1 className='title'>{nombre}</h1>
  <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="idetail card-img-top" src={foto} alt="Card image"/>
    <div className="card-body">
      <h4 className="card-title" style={{margin: "40px"}}>{nombre}</h4>
      <p className="card-text">{descripcion}</p>
      <br/>
      <h5 className="card-text">$ {precio} USD</h5>
      <h5 className="card-title">Existencia: {stock}</h5>
      <br/>
      <ItemCount
      initialValue={1}
      addCarrito={addCarrito}
      itemSelected={Prodfilter[0]}
      carrito={carrito}
      />
    </div>
  </div>
</div>
    ))}
    
</div>
  )
}

export default ItemDetailContainer