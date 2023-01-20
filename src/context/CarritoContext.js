import React,{createContext, useState} from 'react'
import { useEffect } from 'react';
import useFirebase from '../hooks/useFirebase';

export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {

  const {productos,getProducts} = useFirebase()

  useEffect(()=>{
    getProducts()
    return () => {

    }
  }, [])

  const [carrito, setCarrito] = useState([]);

  const addCarrito = (producto) => {
    setCarrito([...carrito,producto])
  }

  const limpiarCarrito = () => {
    setCarrito([]);
  }

  return (
    <CarritoContext.Provider value={{productos,carrito,addCarrito,limpiarCarrito}}>
        {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider