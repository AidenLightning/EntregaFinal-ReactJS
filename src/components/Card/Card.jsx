import React from 'react'
import {Link} from 'react-router-dom'
import "./card.css";

const Card = (props) => {
    const {foto, nombre, precio, id, stock} = props

  return (
    <div className="card col-sm-6 col-md-4">
    <img className="card-img-top" src={foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title">{nombre}</h4>
        <br/>
        <h5 className="card-title">Existencia: {stock}</h5>
        <h5 className="card-text">$ {precio} USD</h5>
        <br/>
        <Link to={`/item/detail/${id}`}>
        <button id={id} className="detailb btn btn-primary btn-lg btn-block">Mas Info</button>
        </Link>
    </div>
</div>
  )
}

export default Card