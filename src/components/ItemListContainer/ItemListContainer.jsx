import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import Greeting from "../Greeting/Greeting";

const ItemListContainer = (props) => {

    const {productos} = props

    const {categoria} = useParams()
    const filter = categoria ? productos.filter ((item) => item.categoria === categoria) : productos

  return (
    
    <div>
        <Greeting/>

    <div className="d-flex container-fluid row" style={{ margin: "auto" }}>
    {filter.map(({ nombre, descripcion, foto, precio, id, stock }, index) => (
      <Card
        key={index}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        foto={foto}
        precio={precio}
        stock={stock}
      />
    ))}
  </div>
  </div>
  )
}

export default ItemListContainer