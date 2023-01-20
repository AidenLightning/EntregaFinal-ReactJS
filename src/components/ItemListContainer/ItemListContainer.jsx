import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import Greeting from "../Greeting/Greeting";

const ItemListContainer = () => {

    const {productos} = useContext(CarritoContext);

    const {categoria} = useParams()
    const filter = categoria ? productos.filter ((item) => item.categoria === categoria) : productos

  return (
    
    <div>
        <Greeting/>
    <div className="d-flex container-fluid row" style={{ margin: "auto" }}>
    {filter.map(({ nombre, foto, precio, id, stock }, index) => (
      <Card
        key={index}
        id={id}
        nombre={nombre}
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