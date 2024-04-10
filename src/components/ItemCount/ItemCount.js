import React from "react";

export const ItemCount = () => {
  const { count, decrement, increment, addToCart } = useCount();

  return (
    <div>
      <div>
        <button onClick={decrement}>Restar</button>
        <span>{count}</span>
        <button onClick={increment}>Sumar</button>
      </div>
      <button onClick={addToCart}>Agregar al Carrito</button>
    </div>
  );
};
