import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const {foto, nombre, descripcion, precio, id, stock} = props
  return (
    <div className="card col-sm-6 col-md-4">
    <img className="card-img-top" src={foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title">{nombre}</h4>
        <p className="card-text">{descripcion}</p>
        <h5 className="card-title">Existencia: {stock}</h5>
        <h5 className="card-text">$ {precio} USD</h5>
        <Link to={`/item/detail/${id-1}`}>
        <button id={id} className="btn btn-primary" style={{ margin: "5px" }}>Mas Info</button>
        </Link>
    </div>
</div>
  )
}

export default Card