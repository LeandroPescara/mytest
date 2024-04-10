import React, { useEffect, useState } from "react";
import { products } from "../../data/data";
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.css";

export const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  console.log(idCategory);

  const [myProducts, setMyProducts] = useState([]);
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  useEffect(() => {
    myPromise.then((data) => {
      setMyProducts(
        idCategory ? data.filter((prod) => prod.category == idCategory) : data
      );
    });
  }, [idCategory]);

  return (
    <div className="container--cards">
      <ItemList products={myProducts} />
    </div>
  );
};
