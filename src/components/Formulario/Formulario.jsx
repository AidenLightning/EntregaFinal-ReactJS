import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import Swal from "sweetalert2";

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="text-danger my-2">{error.nombre}</h6>
      )}
    </div>
  );
};

const Formulario = ({ total, compra}) => {

    const {limpiarCarrito} = useContext(CarritoContext);

    const validarTodoLLeno = (campos) => {
        return campos.some((campo) => campo === "")
      }
    
  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      direccion: "",
      telefono: "",
    },
    total: total,
    items: compra,
  });

  const [error, setError] = useState({});
  
  const {
    buyer: { email, nombre, direccion, telefono},
  } = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validarTodoLLeno([email, nombre, direccion, telefono])) {
        Swal.fire({
        title: "Oops !",
        text: "Faltan campos por completar !",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Genial !",
      text: "Su orden de compra se genero correctamente !",
      icon: "success",
    });
    limpiarCarrito();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio !" });
      return;
    }
    setError({});
  };

  return (
    
    <form onSubmit={onSubmit} className="container">
      <h3 className="text-center my-4">🎵 Datos del Comprador 🎵</h3>
      {Object.keys(formulario.buyer).map((key,index) => (
        <Input
        key={index}
        className="mb-4"
        type="text"
        name={`${key}`}
        value={key.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={`form-control ${error[key] && "is-invalid"}`}
        placeholder={`${key}`}
        error={error}
        />
      ))}
     
     <div className="pagabuttons">

                <button type="submit" className="finalb btn btn-lg btn-success">Finalizar Compra</button>

              <Link to={`/`}>
                <button className="regresab btn btn-lg btn-primary">Regresar</button>
              </Link>
            </div>
    </form>
  );
};

export default Formulario;