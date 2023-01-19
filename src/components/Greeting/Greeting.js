import React from "react";
import "./greeting.css";

const ItemListContainer = () => {

  return (
    <div>
      <div className="greeting">
        <h1>🎉 Bienvenido a la Tienda en linea de Instrumentos Musicales 🎉</h1>
        <div className="container-fluid imgWelcome">
          <img src="https://www.sweetwater.com/insync/media/2019/04/Stack_O_Amps_001-1050x550.jpg" alt="Rock" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
