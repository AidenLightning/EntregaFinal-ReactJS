import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {

  /*const item = (props) => {
    const {item,addCarrito} = props;
    const {id,categoria,nombre,descripcion,precio,stock} = item
  }*/

  const {productos,addCarrito} = props

  const {id} = useParams()
  const idItem = (id-1);

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {productos[idItem].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={productos[idItem].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{productos[idItem].nombre}</h4>
        <p className="card-text">{productos[idItem].descripcion}</p>
        <h5 className="card-text">$ {productos[idItem].precio} USD</h5>
        <h5 className="card-title">Existencia: {productos[idItem].stock}</h5>
        <button id={productos[idItem].id} className="btn btn-primary">Comprar</button>
        <ItemCount
          initialValue={1}
          addCarrito={addCarrito}
          itemSelect={productos[idItem]}
        />
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer