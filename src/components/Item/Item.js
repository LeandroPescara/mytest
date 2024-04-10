import React from "react";
import "../Item/item.css";

export const Item = ({ products }) => {
  return (
    <div className="card">
      <h3 className="card--title">{products.title}</h3>
      <img className="card--img" src={products.img} alt={products.title} />
      <div className="card--price">$ {products.price}</div>
      <button className="card--more">VER MAS</button>
    </div>
  );
};
