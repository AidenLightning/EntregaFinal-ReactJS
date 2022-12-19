import React from "react";
import "./greeting.css";

const ItemListContainer = (props) => {
  const { greeting } = props;
  return (
    <div>
      <div className="greeting">
        <h1>🎉{greeting}🎉</h1>
        <div className="imgWelcome"></div>
      </div>
    </div>
  );
};

export default ItemListContainer;
